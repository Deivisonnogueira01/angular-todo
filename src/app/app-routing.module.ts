import { AlunoDeleteComponent } from "src/alunos/alunos-delete/alunos-delete.component";
import { AlunosCreateComponent } from "src/alunos/alunos-create/alunos-create.component";
import { AlunoListComponent } from "../alunos/alunos-list/alunos-list.component";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunoUpdateComponent } from "src/alunos/alunos-update/alunos-update.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },

  {
    path: "",
    component: NavComponent,
    children: [
      { path: "home", component: HomeComponent },

      { path: "alunos", component: AlunoListComponent },
      { path: "alunos/create", component: AlunosCreateComponent },
      { path: "alunos/update/:id", component: AlunoUpdateComponent },
      { path: "alunos/delete/:id", component: AlunoDeleteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
