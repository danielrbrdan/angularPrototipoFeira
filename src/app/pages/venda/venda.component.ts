import { Component, Injector, OnInit } from '@angular/core';
import { VendaService } from './service/venda.service';
import { IVenda } from './interface/venda.interface';
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
  selector: 'app-venda',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    TableComponent,
    ColumnComponent,
  ],
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.scss',
})
export class VendaComponent extends BaseComponent<IVenda> implements OnInit {
  vendas?: IVenda[];
  message?: string;

  constructor(
    protected readonly vendaService: VendaService,
    public readonly authService: AuthService,
    protected injector: Injector
  ) {
    super(injector, vendaService);
  }

  override ngOnInit(): void {
    this.findAll();
  }
}
