import { Component, Injector, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BaseService } from '../service/base.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base',
  template: ``,
})
export class BaseComponent<T extends { id: number }> implements OnInit {
  @Input() idEdit?: number;

  protected router!: Router;
  protected activatedRoute!: ActivatedRoute;
  protected location!: Location;
  rows?: T[];
  form!: FormGroup;
  data?: T;

  constructor(
    protected readonly _injector: Injector,
    protected readonly service: BaseService<T>
  ) {
    this.router = this._injector.get(Router);
    this.activatedRoute = this._injector.get(ActivatedRoute);
    this.location = this._injector.get(Location);
  }

  ngOnInit(): void {
    this.editActions();
  }

  editActions() {
    if (!this.idEdit) {
      return;
    }

    this.loadData();
  }

  loadData() {
    if (!this.idEdit) {
      return;
    }

    this.service.findById(this.idEdit).subscribe((data) => {
      this.data = data;
      this.form.patchValue(this.mapToLoadData(data));
    });
  }

  mapToLoadData(data: T): Object {
    return data;
  }

  get currentUrl() {
    return window.location.href;
  }

  protected moveToCreatePage() {
    this.router.navigate(['create'], { relativeTo: this.activatedRoute });
  }

  moveToEdit(id: number) {
    this.router.navigate([`${this.router.url.split('/')[1]}/edit/${id}`]);
  }

  protected moveToPreviousPage() {
    this.router.navigate([`${this.router.url.split('/')[1]}`]);
  }

  findAll() {
    this.service.findAll().subscribe((response) => {
      this.rows = response;
    });
  }

  onSubmit(): void {
    this.createOrUpdate();
  }

  createOrUpdate() {
    if (this.form.invalid) return;
    const value = this.getFormValue();

    if (this.idEdit) {
      this.service.update(value).subscribe({
        next: (result) => {
          this.editActions();
        },
        error: (err) => {},
      });
    } else {
      this.create(value);
    }
  }

  getFormValue() {
    return this.form.getRawValue() as T;
  }

  create(value: T) {
    this.service.create(value).subscribe({
      next: (result) => {
        this.form.reset();
        this.moveToEdit(result.id);
      },
      error: (err) => {},
    });
  }

  deleteById(id: number) {
    this.service.deleteById(id).subscribe({
      next: (result) => {
        this.findAll();
      },
      error: (err) => {},
    });
  }
}
