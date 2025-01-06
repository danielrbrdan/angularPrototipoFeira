import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { IUser } from '../interface/user.interface';
import { LocalStorageService } from '../../utils/service/localStorage.service';
import { ENVIRONMENT } from '../../../environment/environment';
import { LoginResponse } from '../interface/authResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router,
    private readonly localServiveService: LocalStorageService
  ) {}

  login(user: IUser): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>(`${ENVIRONMENT.apiUrl}/auth/login`, user)
      .pipe(
        tap((response) => {
          this.localServiveService.setItem('user', btoa(JSON.stringify(user)));

          const keys: (keyof LoginResponse)[] = ['token', 'expiresIn'];
          keys.forEach((key) => {
            this.localServiveService.setItem(
              key,
              btoa(JSON.stringify(response[key]))
            );
          });

          this.router.navigate(['']);
        })
      );
  }

  create(user: IUser): Observable<any> {
    return this.httpClient.post<any>(`${ENVIRONMENT.apiUrl}/auth/singup`, user);
  }

  get loggedUser(): IUser {
    return this.localServiveService.getItem('user')
      ? JSON.parse(atob(this.localServiveService.getItem('user') as string))
      : null;
  }

  logout() {
    this.localServiveService.clear();
    this.router.navigate(['login']);
  }

  // get obterUsuarioLogado(): IUsuario {
  //   return this.localServiveService.getItem('usuario')
  //     ? JSON.parse(atob(this.localServiveService.getItem('usuario')))
  //     : null;
  // }
  // get obterIdUsuarioLogado(): string {
  //   return this.localServiveService.getItem('usuario')
  //     ? (JSON.parse(atob(this.localServiveService.getItem('usuario'))) as IUsuario).id
  //     : null;
  // }

  get token(): string {
    return this.localServiveService.getItem('token')
      ? JSON.parse(
          atob(this.localServiveService.getItem('token') as string)
        )
      : null;
  }

  get isLoggedIn(): boolean {
    return this.localServiveService.getItem('token') ? true : false;
  }
}
