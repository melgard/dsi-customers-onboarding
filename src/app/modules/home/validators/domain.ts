import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class Domain {
    static createValidator(zipcodeService: ZipcodeService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors> => {
            return zipcodeService.fakeHttp(control.value).pipe(
            map((result: boolean) => result ? null : {invalidAsync: true})
            );
        };
    }
}
