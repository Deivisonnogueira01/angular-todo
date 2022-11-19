import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../../model/user';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User = {
    id: null,
    nome: "",
    email: "",
    password: null,
    status: false,
    confirmationToken: null,
    salt: null,
   
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  email: FormControl = new FormControl(null, Validators.email);
  age: FormControl = new FormControl(null, Validators.maxLength(2));
  nota1: FormControl = new FormControl(null, Validators.maxLength(2));
  nota2: FormControl = new FormControl(null, Validators.maxLength(2));
  media: FormControl = new FormControl(null, Validators.maxLength(3));
  status: FormControl = new FormControl(null, null);

  constructor(
    private service: UserService,
    private toast:    ToastrService,
    private router:          Router,
    private route:   ActivatedRoute,
    ) { }

  ngOnInit(): void {
   // this.user.id = this.route.snapshot.paramMap.get('id');
    this.findById();
   }

  findById(): void {
    this.service.findById(this.user.id).subscribe(resposta => {
      
      this.user = resposta;
    })
  }

  update(): void {
    this.service.update(this.user).subscribe(() => {
      this.toast.success('Aluno atualizado com sucesso', 'Update');
      this.router.navigate(['user'])
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
    return this.nome.valid && this.email.valid 
  }
}
