import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    static whitespacesValidation(control: AbstractControl): ValidationErrors | null {
        return control.value && control.value.length !== 0
        && control.value.trim().length === 0 ? { whitespacesValidation: true } : null;
    }
}
