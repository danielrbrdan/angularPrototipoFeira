import { Component, Injector, OnInit } from '@angular/core';
import { ProdutoService } from './service/produto.service';
import { IProduto } from './interface/produto.interface';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../../auth/service/auth.service';
import { ButtonComponent } from '../../components/button/button.component';
import { ColumnComponent } from '../../components/table/column/column.component';
import { TableComponent } from '../../components/table/table.component';
import { BaseComponent } from '../../utils/component/base.component';

@Component({
  selector: 'app-produto',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    TableComponent,
    ColumnComponent,
  ],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss',
})
export class ProdutoComponent extends BaseComponent<IProduto> implements OnInit {
  produtos?: IProduto[];
  message?: string;

  constructor(
    protected readonly produtoService: ProdutoService,
    public readonly authService: AuthService,
    protected injector: Injector
  ) {
    super(injector, produtoService);
  }

  override ngOnInit(): void {
    this.findAll();
  }
}
