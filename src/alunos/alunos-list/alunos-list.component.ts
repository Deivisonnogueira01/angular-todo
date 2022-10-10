import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";
import { Aluno } from "../../app/model/alunos";


@Component({
  selector: "app-alunos",
  templateUrl: "./alunos-list.component.html",
  styleUrls: ["./alunos-list.component.css"],
})
export class AlunoListComponent implements OnInit {

 
  ELEMENT_DATA: Aluno[] = [
    {
      id: 1,
      name: 'deivison',
      email: '@teste',
      age: 15,
      nota1: 10,
      nota2: 2,
      media: 15,
      status: 'aprovado'
    }
   
  ];

  displayedColumns: string[] = ['id', 'name', 'email', 'age','nota1','nota2', 'media', 'situacao'];
  dataSource = new MatTableDataSource<Aluno>(this.ELEMENT_DATA);


  constructor() {}

  ngOnInit(): void {
  }

  alunos: Aluno[] = [];


  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator
  }
}


  
   

/*  columns = [
    { attribute: "id", name: "ID", value: (element: Aluno) => `${element.id}` },
    {
      attribute: "name",
      name: "Nome",
      value: (element: Aluno) => `${element.name}`,
    },
    {
      attribute: "email",
      name: "Email",
      value: (element: Aluno) => `${element.email}`,
    },
    {
      attribute: "age",
      name: "Idade",
      value: (element: Aluno) => `${element.age}`,
    },

    {
      attribute: "nota1",
      name: "Nota1",
      value: (element: Aluno) => `${element.nota1}`,
    },
    {
      attribute: "nota2",
      name: "Nota2",
      value: (element: Aluno) => `${element.nota2}`,
    },

    {
      attribute: "media",
      name: "Média",
      value: (element: Aluno) => `${element.media}`,
    },
    {
      attribute: "status",
      name: "Situação",
      value: (element: Aluno) => `${element.status}`,
    },
  ];


  displayedColumns = this.columns.map((Aluno) => Aluno.attribute);

  dataSource = new MatTableDataSource(this.alunos);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
*/



 

