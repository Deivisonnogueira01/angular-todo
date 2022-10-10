import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Aluno } from "src/app/model/alunos";
import { AlunosService } from "src/app/services/alunos.service";


@Component({
  selector: "app-alunos-create",
  templateUrl: "./alunos-create.component.html",
  styleUrls: ["./alunos-create.component.css"],
})
export class AlunosCreateComponent implements OnInit {
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

  name: FormControl = new FormControl(null, Validators.minLength(3));
  email: FormControl = new FormControl(null, Validators.email);
  age: FormControl = new FormControl(null, Validators.maxLength(2));
  nota1: FormControl = new FormControl(null, Validators.maxLength(2));
  nota2: FormControl = new FormControl(null, Validators.maxLength(2));
  media: FormControl = new FormControl(null, Validators.maxLength(3));
  status: FormControl = new FormControl(null, null);

  constructor(
    private service: AlunosService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  create(): void {
    this.service.create(this.alunos).subscribe(
      () => {
        this.toast.success("Aluno cadastrado com sucesso", "Cadastro");
        this.router.navigate(["alunos"]);
      },
      (ex) => {
        if (ex.error.errors) {
          ex.error.errors.forEach((element) => {
            this.toast.error(element.message);
          });
        } else {
          this.toast.error(ex.error.message);
        }
      }
    );
  }

  validaCampos(): boolean {
    return this.name.valid && this.email.valid;
  }
}
