import { Component } from '@angular/core';
import { ProdutoCreateComponent } from '../produto-create/produto-create.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-update',
  imports: [ProdutoCreateComponent],
  templateUrl: './produto-update.component.html',
  styleUrl: './produto-update.component.scss',
})
export class ProdutoUpdateComponent {
  id?: number;

  constructor(protected activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id')) || undefined;
    });
  }
}
