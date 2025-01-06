import { Injectable } from '@angular/core';
import { ILoja } from '../interface/loja.interface';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '../../../../environment/environment';
import { BaseService } from '../../../utils/service/base.service';

@Injectable({
  providedIn: 'root',
})
export class LojaService extends BaseService<ILoja> {
  constructor(http: HttpClient) {
    super(`${ENVIRONMENT.apiUrl}/loja`, http);
  }
}
