import { Component } from '@angular/core';
import { DefaultCadastroLayoutComponent } from '../../components/default-cadastro-layout/default-cadastro-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CadastroService } from '../../services/cadastro/cadastro.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { senhaConfirmacaoValidator } from '../../validators/validators'; // Importe o validador aqui

interface CadastroForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmarSenha: FormControl<string | null>;
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    DefaultCadastroLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    CadastroService
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  cadastroForm!: FormGroup<CadastroForm>;

  constructor(
    private router: Router,
    private cadastroService: CadastroService,
    private toastService: ToastrService
  ) {
    this.cadastroForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmarSenha: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, { validators: senhaConfirmacaoValidator }); // Utilize o validador aqui
  }

  submit() {
    if (this.cadastroForm.valid) {
      this.cadastroService.cadastro(this.cadastroForm.value.email!, this.cadastroForm.value.password!).subscribe({
        next: () => {
          this.toastService.success("Cadastro feito com sucesso!")
          this.router.navigate(["login"]);
        },
        error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
      });
    }
  }

  navigate() {
    this.router.navigate(["login"]);
  }
}
