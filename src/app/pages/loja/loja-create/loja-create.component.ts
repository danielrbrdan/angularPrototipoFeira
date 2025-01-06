import { Component, Injector } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ILoja } from '../interface/loja.interface';
import { LojaService } from '../service/loja.service';
import { BaseComponent } from '../../../utils/component/base.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { InputComponent } from '../../../components/input/input.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../../components/table/table.component';
import { ColumnComponent } from '../../../components/table/column/column.component';

@Component({
  selector: 'app-loja-create',
  imports: [CommonModule, ButtonComponent, InputComponent, ReactiveFormsModule, TableComponent, ColumnComponent],
  templateUrl: './loja-create.component.html',
  styleUrl: './loja-create.component.scss',
})
export class LojaCreateComponent extends BaseComponent<ILoja> {
  constructor(
    private readonly formBuilder: FormBuilder,
    protected injector: Injector,
    private readonly lojaService: LojaService
  ) {
    super(injector, lojaService);
  }

  override ngOnInit() {
    this.setForm();
    super.ngOnInit();
  }

  private setForm() {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
    });
  }
}
