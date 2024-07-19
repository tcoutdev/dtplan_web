import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export function senhaConfirmacaoValidator(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    // Verifica se formGroup é um FormGroup
    if (!(formGroup instanceof FormGroup)) {
      return null;
    }

    const senha = formGroup.get('password')?.value;
    const confirmarSenha = formGroup.get('confirmPassword')?.value;

    if (senha && confirmarSenha && senha !== confirmarSenha) {
      return { passwordsMismatch: true };
    }
    return null;
  };
}
