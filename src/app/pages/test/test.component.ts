import { Component, Injector, OnInit } from '@angular/core';
import { TestService } from './service/test.service';
import { ITest } from './interface/test.interface';
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
  selector: 'app-test',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    TableComponent,
    ColumnComponent,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent extends BaseComponent<ITest> implements OnInit {
  tests?: ITest[];
  message?: string;

  constructor(
    protected readonly testService: TestService,
    public readonly authService: AuthService,
    protected injector: Injector
  ) {
    super(injector, testService);
  }

  override ngOnInit(): void {
    this.findAll();
  }
}
