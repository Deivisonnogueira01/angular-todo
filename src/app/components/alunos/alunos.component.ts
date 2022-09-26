import { Component, OnInit } from "@angular/core";
import { Aluno } from "../../model/alunos";
import { MatTableDataSource } from "@angular/material/table";

const alunosList: Aluno[] = [
  new Aluno(1, "Deivison", 20, 7, 9.7),
  new Aluno(2, "Kaique", 26, 7.8, 9.5),
  new Aluno(3, "Nobru", 20, 8, 8),
  new Aluno(4, "Robson", 22, 9, 3.5),
  new Aluno(5, "Isaque", 15, 10, 9),
  new Aluno(6, "Jeferson", 20, 9, 9),
  new Aluno(7, "Luis", 20, 6.5, 6),
  new Aluno(8, "Zaqueu", 21, 7, 7.5),
  new Aluno(9, "Saulo", 28, 7, 7.5),
  new Aluno(10, "Jamas", 26, 9, 9.5),
];

@Component({
  selector: "app-alunos",
  templateUrl: "./alunos.component.html",
  styleUrls: ["./alunos.component.css"],
})
export class AlunoComponent implements OnInit {
  constructor() {}

  columns = [
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

  dataSource = new MatTableDataSource(alunosList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addAluno() {}

  removeAluno() {}

  ngOnInit(): void {}
}
