import { TasksDeleteComponent } from './components/task/tasks-delete/tasks-delete.component';
import { TaskUpdateComponent } from './components/task/tasks-update/tasks-update.component';
import { TaskCreateComponent } from './components/task/tasks-create/task-create.component';
import { TasksListComponent } from './components/task/tasks-list/tasks-list.component';

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

      {path: "task", component: TasksListComponent},
      {path: "task/create", component: TaskCreateComponent},
      {path: "task/update/:id", component: TaskUpdateComponent},
      {path: "task/delete/:id", component: TasksDeleteComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
