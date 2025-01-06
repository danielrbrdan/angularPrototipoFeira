import { Injectable } from '@angular/core';
import { IVenda } from '../interface/venda.interface';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '../../../../environment/environment';
import { BaseService } from '../../../utils/service/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VendaService extends BaseService<IVenda> {
  constructor(http: HttpClient) {
    super(`${ENVIRONMENT.apiUrl}/venda`, http);
  }
}
