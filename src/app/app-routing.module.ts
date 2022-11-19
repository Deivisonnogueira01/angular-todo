
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NavComponent } from "./components/nav/nav.component";
import { UserCreateComponent } from "./components/user/user-create/user-create.component";
import { UserDeleteComponent } from "./components/user/user-delete/user-delete.component";
import { UserListComponent } from "./components/user/user-list/user-list.component";
import { UserUpdateComponent } from "./components/user/user-update/user-update.component";


const routes: Routes = [
  { path: "login", component: LoginComponent },

  {
    path: "",
    component: NavComponent,
    children: [
      { path: "home", component: HomeComponent },

      { path: "user", component: UserListComponent },
      { path: "user/create", component: UserCreateComponent },
      { path: "user/update/:id", component: UserUpdateComponent },
      { path: "user/delete/:id", component: UserDeleteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
