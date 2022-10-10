
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunoUpdateComponent } from "./components/alunos/alunos-update/alunos-update.component";
import { AlunosCreateComponent } from "./components/alunos/alunos-create/alunos-create.component";
import { AlunoListComponent } from "./components/alunos/alunos-list/alunos-list.component";
import { AlunoDeleteComponent } from "./components/alunos/alunos-delete/alunos-delete.component";


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
