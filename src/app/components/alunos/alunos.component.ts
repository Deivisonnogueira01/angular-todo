import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../model/alunos';
import { MatTableDataSource } from '@angular/material/table';


const alunosList: Aluno[] = [

  new Aluno(1, 'Deivison', 10, 7, 9.7),
  new Aluno(2, 'Kaique', 10, 7.8, 9.5),
  new Aluno(3, 'Nobru', 9, 8, 8),
  new Aluno(4, 'Robson', 15, 9, 3.5),
  new Aluno(5, 'Isaque', 17, 10, 9),
  new Aluno(6, 'Jeferson', 11, 9, 9),
  new Aluno(7, 'Luis', 25, 6.5, 6),
  new Aluno(8, 'Zaqueu', 14, 7, 7.5),
  new Aluno(9, 'Saulo', 15, 7, 7.5),
  new Aluno(10, 'Jamas', 16, 9, 9.5),

]


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunoComponent implements OnInit {


  columns = [
    { attribute: 'id', name: 'ID', value: (element: Aluno) => `${element.id}` },
    { attribute: 'name', name: 'Nome', value: (element: Aluno) => `${element.name}` },
    { attribute: 'email', name: 'Email', value: (element: Aluno) => `${element.email}` },
    { attribute: 'age', name: 'Idade', value: (element: Aluno) => `${element.age}` },
    { attribute: 'nota1', name: 'Nota1', value: (element: Aluno) => `${element.nota1}` },
    { attribute: 'nota2', name: 'Nota2', value: (element: Aluno) => `${element.nota2}` },
    { attribute: 'average', name: 'Média', value: (element: Aluno) => `${element.average}` },
    { attribute: 'status', name: 'Situação', value: (element: Aluno) => `${element.status}` },
  ];

  displayedColumns = this.columns.map(Aluno => Aluno.attribute);
  
  dataSource = new MatTableDataSource(alunosList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addAluno() {}


  removeAluno() {}



  constructor() { }

  ngOnInit(): void {
  }
}

