import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ViacepService } from 'src/app/shared/services/viacep.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.scss']
})
export class TeamCreateComponent implements OnInit {

  novoTime!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cepService: ViacepService
  ) { }

  ngOnInit(): void {
    this.novoTime = this.fb.group({
      infos: this.fb.group({
        name: [''],
        apelido: [''],
      }),
      endereco: this.fb.group({
        cep: [''],
        logradouro: [''],
        numero: [''],
        complemento: [''],
        localidade: [''],
        uf: [''],
      })
    });
  }

  getAddress() {
    const cep = this.novoTime.get('endereco.cep')?.value;
    this.cepService.getEndereco(cep).subscribe({
      next: (endereco) => {
        console.log('CEP', endereco);
        this.novoTime.patchValue({endereco});
      }
    })
  }

  save(form: FormBuilder) {
    console.log('oi', form);
  }

}
