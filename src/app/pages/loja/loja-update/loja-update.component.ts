import { Component } from '@angular/core';
import { LojaCreateComponent } from '../loja-create/loja-create.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loja-update',
  imports: [LojaCreateComponent],
  templateUrl: './loja-update.component.html',
  styleUrl: './loja-update.component.scss',
})
export class LojaUpdateComponent {
  id?: number;

  constructor(protected activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id')) || undefined;
    });
  }
}
