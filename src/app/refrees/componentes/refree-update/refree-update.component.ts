import { Router, ActivatedRoute } from '@angular/router';
import { RefreeService } from './../../../shared/services/refreeService/refree.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refree-update',
  templateUrl: './refree-update.component.html',
  styleUrls: ['./refree-update.component.scss']
})
export class RefreeUpdateComponent implements OnInit {
  refress!: FormGroup;
  id: string = '';
  arbitro: any = [];

  constructor(
    private fb: FormBuilder,
    private refreeService: RefreeService,
    private router: Router,
    private actvRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.actvRouter.snapshot.params["id"];
    this.refreeById();
    this.formRefrees();
  }

  formRefrees() {
    this.refress = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      rg: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dt_nascimento: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  refreeById() {
    this.refreeService.getRefreeById(+this.id).subscribe({
      next: (data) => {
        this.arbitro = data;
        this.refress.patchValue({
          name: data.name,
          surname: data.surname,
          rg: data.rg,
          cpf: data.cpf,
          dt_nascimento: data.dt_nascimento,
          status: data.status
        });
        console.log('refreeById', this.arbitro);
      },
      error: (err) => {
        console.log('err refreeById', err);
      }
    });
  }

  updateRefree(values: any) {
    this.refress.patchValue({
      name: values.name,
      surname: values.surname,
      rg: values.rg,
      cpf: values.cpf,
      dt_nascimento: values.dt_nascimento,
      status: values.status
    });
    console.log('updateRefree', this.refress.value);

    this.refreeService.updateRefree(+this.id, this.refress.value).subscribe({
      next: (data) => {
        console.log('UPDATE REFREE OK', data);
        this.router.navigate(['/arbitros']);
      },
      error: (err) => {
        console.log('FAIL UPDATE REFREE', err);
      }
    })
  }
}
