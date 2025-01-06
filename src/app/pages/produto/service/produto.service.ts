import { Injectable } from '@angular/core';
import { IProduto } from '../interface/produto.interface';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '../../../../environment/environment';
import { BaseService } from '../../../utils/service/base.service';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService extends BaseService<IProduto> {
  constructor(http: HttpClient) {
    super(`${ENVIRONMENT.apiUrl}/produto`, http);
  }
}
