import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { User } from "src/app/model/user";
import { UserService } from "src/app/services/user.service";


@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"],
})
export class UserCreateComponent implements OnInit {
  
  /*
  user: User = {
    id: null,
    name: "",
    email: "",
    age: null,
    nota1: null,
    nota2: null,
    media: null,
   
  };*/

  name: FormControl = new FormControl(null, Validators.minLength(3));
  email: FormControl = new FormControl(null, Validators.email);
  age: FormControl = new FormControl(null, Validators.maxLength(2));
  nota1: FormControl = new FormControl(null, Validators.maxLength(2));
  nota2: FormControl = new FormControl(null, Validators.maxLength(2));
  media: FormControl = new FormControl(null, Validators.maxLength(3));
  status: FormControl = new FormControl(null, null);

  constructor(
    private service: UserService,
    private toast: ToastrService,
    private router: Router
  ) {}

  user: User;

  ngOnInit(): void {}

  create(): void {
    this.service.create(this.user).subscribe(
      () => {
        this.toast.success("Aluno cadastrado com sucesso", "Cadastro");
        this.router.navigate(["user"]);
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
