import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { notAuthenticatedGuard } from './auth/guards/notAutenticatedGuard';
import { authenticatedGuard } from './auth/guards/autenticatedGuard';
import { LogoutComponent } from './auth/logout/logout.component';
import { ProdutoCreateComponent } from './pages/produto/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './pages/produto/produto-update/produto-update.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { TestCreateComponent } from './pages/test/test-create/test-create.component';
import { TestUpdateComponent } from './pages/test/test-update/test-update.component';
import { TestComponent } from './pages/test/test.component';
import { LojaComponent } from './pages/loja/loja.component';
import { LojaCreateComponent } from './pages/loja/loja-create/loja-create.component';
import { LojaUpdateComponent } from './pages/loja/loja-update/loja-update.component';
import { VendaComponent } from './pages/venda/venda.component';
import { VendaCreateComponent } from './pages/venda/venda-create/venda-create.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [notAuthenticatedGuard],
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [authenticatedGuard],
  },
  // {
  //   path: '',
  //   component: TestComponent,
  //   canActivate: [authenticatedGuard],
  // },
  {
    path: 'test',
    canActivate: [authenticatedGuard],
    children: [
      {
        path: '',
        component: TestComponent,
      },
      {
        path: 'create',
        component: TestCreateComponent,
      },
      {
        path: 'edit/:id',
        component: TestUpdateComponent,
      },
    ],
  },
  {
    path: 'produto',
    canActivate: [authenticatedGuard],
    children: [
      {
        path: '',
        component: ProdutoComponent,
      },
      {
        path: 'create',
        component: ProdutoCreateComponent,
      },
      {
        path: 'edit/:id',
        component: ProdutoUpdateComponent,
      },
    ],
  },

  {
    path: 'loja',
    canActivate: [authenticatedGuard],
    children: [
      {
        path: '',
        component: LojaComponent,
      },
      {
        path: 'create',
        component: LojaCreateComponent,
      },
      {
        path: 'edit/:id',
        component: LojaUpdateComponent,
      },
    ],
  },

  {
    path: 'venda',
    canActivate: [authenticatedGuard],
    children: [
      {
        path: '',
        component: VendaComponent,
      },
      {
        path: 'create',
        component: VendaCreateComponent,
      },
    ],
  },
];
