import { Injectable } from '@angular/core';
import { ITest } from '../interface/test.interface';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../../utils/service/base.service';
import { ENVIRONMENT } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class TestService extends BaseService<ITest> {
  constructor(http: HttpClient) {
    super(`${ENVIRONMENT.apiUrl}/test`, http);
  }
}
