import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit(): void {
    this.carregarDados();
  }
  
  opcaoSelecionada: string = 'perfil'; // Inicia com a opção 'perfil' selecionada por padrão

  selecionarOpcao(opcao: string): void {
    this.opcaoSelecionada = opcao;
  }

  carregarDados(): void {
    // Exemplo de chamada ao serviço para carregar os dados dos DTOs
    /*this.backendService.obterUsuarios().subscribe(data => {
      this.usuarios = data;
    });

    this.backendService.obterFichas().subscribe(data => {
      this.fichas = data;
    });

    this.backendService.obterExercicios().subscribe(data => {
      this.exercicios = data;
    });*/
  }

}
