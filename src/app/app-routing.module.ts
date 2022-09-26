import { AlunoComponent } from "./components/alunos/alunos.component";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "login", component: LoginComponent },

  {
    path: "",
    component: NavComponent,
    children: [
      { path: "home", component: HomeComponent },

      { path: "alunos", component: AlunoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
