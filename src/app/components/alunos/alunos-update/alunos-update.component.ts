import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Aluno } from 'src/app/model/alunos';
import { AlunosService } from 'src/app/services/alunos.service';


@Component({
  selector: 'app-alunos-update',
  templateUrl: './alunos-update.component.html',
  styleUrls: ['./alunos-update.component.css']
})
export class AlunoUpdateComponent implements OnInit {

  alunos: Aluno = {
    id: null,
    name: "",
    email: "",
    age: null,
    nota1: null,
    nota2: null,
    media: null,
    status: "",
  }

  name: FormControl = new FormControl(null, Validators.minLength(3));
  email: FormControl = new FormControl(null, Validators.email);
  age: FormControl = new FormControl(null, Validators.maxLength(2));
  nota1: FormControl = new FormControl(null, Validators.maxLength(2));
  nota2: FormControl = new FormControl(null, Validators.maxLength(2));
  media: FormControl = new FormControl(null, Validators.maxLength(3));
  status: FormControl = new FormControl(null, null);

  constructor(
    private service: AlunosService,
    private toast:    ToastrService,
    private router:          Router,
    private route:   ActivatedRoute,
    ) { }

  ngOnInit(): void {
   // this.alunos.id = this.route.snapshot.paramMap.get('id');
    this.findById();
   }

  findById(): void {
    this.service.findById(this.alunos.id).subscribe(resposta => {
      
      this.alunos = resposta;
    })
  }

  update(): void {
    this.service.update(this.alunos).subscribe(() => {
      this.toast.success('Aluno atualizado com sucesso', 'Update');
      this.router.navigate(['alunos'])
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  validaCampos(): boolean {
    return this.name.valid && this.email.valid 
  }
}
