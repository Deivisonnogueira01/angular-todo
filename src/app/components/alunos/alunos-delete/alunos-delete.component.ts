
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Aluno } from 'src/app/model/alunos';
import { AlunosService } from 'src/app/services/alunos.service';



@Component({
  selector: 'app-alunos-delete',
  templateUrl: './alunos-delete.component.html',
  styleUrls: ['./alunos-delete.component.css']
})
export class AlunoDeleteComponent implements OnInit {

  
    alunos: Aluno = {
        id: null,
        name: "",
        email: "",
        age: null,
        nota1: null,
        nota2: null,
        media: null,
        status: "",
      };

  constructor(
    private service: AlunosService,
    private toast:    ToastrService,
    private router:          Router,
    private route:   ActivatedRoute,
    ) { }

  ngOnInit(): void {
  //  this.alunos.id = this.route.snapshot.paramMap.get('id');
    this.findById();
   }

  findById(): void {
    this.service.findById(this.alunos.id).subscribe(resposta => {
      this.alunos = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.alunos.id).subscribe(() => {
      this.toast.success('Aluno deletado com sucesso', 'Delete');
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

}
