import { Component, Injector, OnInit } from '@angular/core';
import { LojaService } from './service/loja.service';
import { ILoja } from './interface/loja.interface';
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
  selector: 'app-loja',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    TableComponent,
    ColumnComponent,
  ],
  templateUrl: './loja.component.html',
  styleUrl: './loja.component.scss',
})
export class LojaComponent extends BaseComponent<ILoja> implements OnInit {
  lojas?: ILoja[];
  message?: string;

  constructor(
    protected readonly lojaService: LojaService,
    public readonly authService: AuthService,
    protected injector: Injector
  ) {
    super(injector, lojaService);
  }

  override ngOnInit(): void {
    this.findAll();
  }
}
