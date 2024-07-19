import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function senhaConfirmacaoValidator(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const senha = formGroup.get('password')?.value;
    const confirmarSenha = formGroup.get('confirmarSenha')?.value;

    if (senha && confirmarSenha && senha !== confirmarSenha) {
      return { passwordsMismatch: true };
    }
    return null;
  };
}
