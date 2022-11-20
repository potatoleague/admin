import { Router } from '@angular/router';
import { RefreeService } from './../../../shared/services/refreeService/refree.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refree-create',
  templateUrl: './refree-create.component.html',
  styleUrls: ['./refree-create.component.scss']
})
export class RefreeCreateComponent implements OnInit {
  refress!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private refreeService: RefreeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formRefrees();
  }

  formRefrees() {
    this.refress = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      rg: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dt_nascimento: ['', [Validators.required]],
    });
  }

  createRefrees(values: any) {
    let form ={
      ...values, status: true
    }
    console.log('FORM REFREE', form);
    // return
    this.refreeService.createRefree(form).subscribe({
      next: (data) => {
        console.log('Sucesso, arbitro cadastrado');
        this.router.navigate(['/arbitros']);
      },
      error: (err) => {
        console.log('err arbitro', err);
      }
    });
  }

}
