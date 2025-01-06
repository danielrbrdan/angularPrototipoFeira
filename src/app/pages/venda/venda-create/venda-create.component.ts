import { Component, Injector } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IVenda } from '../interface/venda.interface';
import { VendaService } from '../service/venda.service';
import { BaseComponent } from '../../../utils/component/base.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { InputComponent } from '../../../components/input/input.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../../components/table/table.component';
import { ColumnComponent } from '../../../components/table/column/column.component';

@Component({
  selector: 'app-venda-create',
  imports: [
    CommonModule,
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './venda-create.component.html',
  styleUrl: './venda-create.component.scss',
})
export class VendaCreateComponent extends BaseComponent<IVenda> {
  constructor(
    private readonly formBuilder: FormBuilder,
    protected injector: Injector,
    private readonly vendaService: VendaService
  ) {
    super(injector, vendaService);
  }

  override ngOnInit() {
    this.setForm();
    super.ngOnInit();
  }

  private setForm() {
    this.form = this.formBuilder.group({
      id: [''],
      produto: ['', [Validators.required]],
      loja: ['', [Validators.required]],
      quantidadeVendida: ['', [Validators.required]],
    });
  }

  override mapToLoadData(data: IVenda) {
    return {
      ...data,
      loja: data.loja.id,
    };
  }

  override getFormValue() {
    const formValues = this.form.getRawValue();
    return {
      ...formValues,
      loja: {
        id: formValues.loja,
      },
      produto: {
        id: formValues.produto,
      },
    } as IVenda;
  }
}
