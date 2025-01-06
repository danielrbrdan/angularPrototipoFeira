import { Component, Injector } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IProduto } from '../interface/produto.interface';
import { ProdutoService } from '../service/produto.service';
import { BaseComponent } from '../../../utils/component/base.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { InputComponent } from '../../../components/input/input.component';
import { QRCodeComponent } from 'angularx-qrcode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-create',
  imports: [CommonModule, ButtonComponent, InputComponent, ReactiveFormsModule, QRCodeComponent],
  templateUrl: './produto-create.component.html',
  styleUrl: './produto-create.component.scss',
})
export class ProdutoCreateComponent extends BaseComponent<IProduto> {
  constructor(
    private readonly formBuilder: FormBuilder,
    protected injector: Injector,
    private readonly produtoService: ProdutoService
  ) {
    super(injector, produtoService);
  }

  override ngOnInit() {
    this.setForm();
    super.ngOnInit();
  }

  private setForm() {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      quantity: [0, [Validators.required]],
    });
  }
}
