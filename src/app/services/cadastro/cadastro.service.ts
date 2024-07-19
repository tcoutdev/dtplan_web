import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CadastroResponse } from '../../types/cadastro-response.type';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly apiUrl = 'https://dtplan-72fc144083c6.herokuapp.com/usuarios/cadastrar';

  constructor(private httpClient: HttpClient) { }

  cadastro(login: string, senha: string): Observable<CadastroResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Criando o corpo da requisição com a estrutura esperada
    const body = {
      login,
      senha,
      permissao: 'ADMIN',
      nome: 'Thiago Coutinho', // Substitua com o valor real, se necessário
      cpf: '08866966584'     // Substitua com o valor real, se necessário
    };

    // Enviando a requisição POST e tratando a resposta
    return this.httpClient.post<CadastroResponse>(this.apiUrl, body, { headers }).pipe(
      tap(response => {
        if (response) {
          // Aqui você pode tratar os dados conforme o tipo CadastroResponse
          sessionStorage.setItem("token", response.id.toString()); // Armazena o ID como string
          sessionStorage.setItem("userid", response.id.toString());
          sessionStorage.setItem("username", response.nome);

          console.log('ID do Usuário:', response.id);
          console.log('Nome do Usuário:', response.nome);
          console.log('CPF do Usuário:', response.cpf);
          console.log('Altura do Usuário:', response.altura);
          console.log('Peso Atual do Usuário:', response.pesoAtual);
        } else {
          console.error('Resposta vazia ou inválida');
        }
      }),
      catchError(this.handleError) // Adicionando tratamento de erro
    );
  }

  // Função para tratar erros
  private handleError(error: HttpErrorResponse) {
    console.error('Ocorreu um erro:', error);
    let errorMessage = 'Erro desconhecido!';
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
