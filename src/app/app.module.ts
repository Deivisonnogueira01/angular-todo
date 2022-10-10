import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlunoListComponent } from './../alunos/alunos-list/alunos-list.component';
import { AlunoUpdateComponent } from './../alunos/alunos-update/alunos-update.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { AlunosCreateComponent } from 'src/alunos/alunos-create/alunos-create.component';
import { AlunoDeleteComponent } from 'src/alunos/alunos-delete/alunos-delete.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';


 // 12

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    AlunoListComponent,
    AlunosCreateComponent,
    AlunoDeleteComponent,
    AlunoUpdateComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatInputModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    })
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
