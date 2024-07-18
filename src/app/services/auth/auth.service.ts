import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor(private http: HttpClient) {
    this.loggedIn = !!localStorage.getItem('auth-token');
  }

  login(login: string, senha: string) {
    console.log("entrou")
    return this.http.post<any>('https://dtplan-72fc144083c6.herokuapp.com/auth/login', { login, senha }).subscribe(response => {
        console.log(response)
        if (response) {
          localStorage.setItem('auth-token', response);
          this.loggedIn = true;
          console.log('Token armazenado com sucesso:', response.token);
        } else {
          console.error('Erro ao obter token de autenticação.');
        }
      }
    );
  }

  cadastro(login: string, senha: string, permissao: string, nome: string, cpf: string) {
    return this.http.post('https://dtplan-72fc144083c6.herokuapp.com/usuarios/cadastrar', { login, senha, permissao, nome, cpf }).subscribe(response => {
        console.log(response);
      }
    );
  }

  getToken(): string | null {
    return localStorage.getItem('auth-token');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout() {
    localStorage.removeItem('auth-token');
    this.loggedIn = false;
  }
}
