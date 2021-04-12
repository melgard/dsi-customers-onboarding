import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Heading } from 'src/app/modules/home/interfaces/heading';
import { Company } from '../../interfaces/company';
import { Country } from '../../interfaces/country';
import { CompanyService } from '../../services/company.service';
import { CountryService } from '../../services/country.service';
import { HeadingService } from '../../services/heading.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public registerForm: FormGroup;
  public headings: Array<Heading> = new Array<Heading>();
  public countries: Array<Country> = new Array<Heading>();
  private mediumRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})', 'g');
  @Output() hasBeenSaved = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private headingsSevice: HeadingService,
    private companyService: CompanyService,
    private countriService: CountryService,
    private messageService: MessageService,
    private spinnerService: NgxSpinnerService
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombreCompleto: ['', Validators.required],
      password: ['', [Validators.pattern(this.mediumRegex), Validators.required]],
      identificador: ['', Validators.required],
      razonSocial: ['', Validators.required],
      rubro: ['', Validators.required],
      pais: ['', Validators.required],
      termsAndConditions: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getHeadings();
    this.getCountries();
  }
  
  onSubmit() {
    if(this.registerForm.invalid) return;
    
    const { value } = this.registerForm;

    this.spinnerService.show();

    const company: Company = {
      email: value.email,
      identificador: value.identificador,
      nombreCompleto: value.nombreCompleto,
      pais: Number(value.pais),
      password: value.password,
      razonSocial: value.razonSocial,
      rubro: Number(value.rubro)
    };

    this.companyService.register(company).subscribe((resp: any) => {
      console.log(resp);
      this.spinnerService.hide();
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Compañía registrada correctamente'});
      this.hasBeenSaved.emit(true);
    }, err => {
      console.log(err);
      this.spinnerService.hide();
      const { error } = err;
      this.messageService.add({severity:'error', summary:'Ha ocurrido un error', detail: error || 'Intenta nuevamente'});
    });
  }
  async getHeadings() {
    this.headingsSevice.getHeadings().subscribe((headings: Heading[]) => {
      this.headings = headings;
    });
  }
  async getCountries() {
    this.countriService.getCountries().subscribe((countries: Country[]) => {
      this.countries = countries;
    });
  }
}
