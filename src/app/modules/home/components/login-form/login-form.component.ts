import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Session } from '../../interfaces/session';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private storageService: StorageService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.loginForm.invalid) return;

    this.authService.login(this.loginForm.value).subscribe((resp: any) => {
      const session: Session = this.authService.extractData(resp);
      this.storageService.setCurrentSession(session);
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Ha iniciado sesión correctamente'});
      setTimeout(() => {
        location.reload();
      }, 3000);
    }, () => {
      this.messageService.add({severity:'error', summary:'Ha ocurrido un error', detail: 'Usuario o Contraseña incorrecta'});
    });
  }
}
