import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../../types/login-response.type';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(login: string, senha: string): Observable<LoginResponse> {
    return this.httpClient.post<any>('https://dtplan-72fc144083c6.herokuapp.com/auth/login', { login: login, senha: senha }).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.token)
        sessionStorage.setItem("expiracao", value.expires_in)
        sessionStorage.setItem("userid", value.usuari_id.toString())
        sessionStorage.setItem("username", value.usuario_nome)

        console.log(value.token)
        console.log(value.expires_in)
        console.log(value.usuari_id)
        console.log(value.usuario_nome)
      })
    )
  }

}
