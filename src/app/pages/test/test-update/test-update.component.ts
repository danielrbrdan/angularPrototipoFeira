import { Component } from '@angular/core';
import { TestCreateComponent } from '../test-create/test-create.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-update',
  imports: [TestCreateComponent],
  templateUrl: './test-update.component.html',
  styleUrl: './test-update.component.scss',
})
export class TestUpdateComponent {
  id?: number;

  constructor(protected activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id')) || undefined;
    });
  }
}
