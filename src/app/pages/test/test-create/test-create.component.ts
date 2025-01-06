import { Component, Injector } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ITest } from '../interface/test.interface';
import { TestService } from '../service/test.service';
import { ButtonComponent } from '../../../components/button/button.component';
import { InputComponent } from '../../../components/input/input.component';
import { BaseComponent } from '../../../utils/component/base.component';

@Component({
  selector: 'app-test-create',
  imports: [ButtonComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './test-create.component.html',
  styleUrl: './test-create.component.scss',
})
export class TestCreateComponent extends BaseComponent<ITest> {
  constructor(
    private readonly formBuilder: FormBuilder,
    protected injector: Injector,
    private readonly testService: TestService
  ) {
    super(injector, testService);
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
