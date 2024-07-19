import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-cadastro-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-cadastro-layout.component.html',
  styleUrl: './default-cadastro-layout.component.scss'
})
export class DefaultCadastroLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output() submit = new EventEmitter<void>();
  @Output() navigate = new EventEmitter<void>();

  onSubmit(): void {
    this.submit.emit(); // Emite o evento de submit
  }

  onNavigate(): void {
    this.navigate.emit(); // Emite o evento de navegação
  }
}
