import { Injectable } from '@angular/core';
import { Aluno } from './../../model/alunos';

@Injectable({
  providedIn: 'root',
})

export class AlunoService {



  constructor(){

  }


    private DATABASE: Aluno[] = [

      new Aluno(1, "Deivison", 20, 7, 9.7),
      new Aluno(2, "Kaique", 26, 7.8, 9.5),
      new Aluno(3, "Nobru", 20, 8, 8),
      new Aluno(4, "Robson", 22, 9, 3.5),
      new Aluno(5, "Isaque", 15, 10, 9),
      new Aluno(6, "Jeferson", 20, 9, 9),
      new Aluno(7, "Luis", 20, 6.5, 6),
      new Aluno(8, "Zaqueu", 21, 7, 7.5),
      new Aluno(9, "Saulo", 28, 7, 7.5),
      new Aluno(10, "Jamas", 26, 9, 9.5)

    ]


    public GetAllAlunos(): Aluno[] {

        return this.DATABASE;

    }


    public CreateAluno(aluno: Aluno): void {

        this.DATABASE.push(aluno);
    }


    public GetAlunoById(id: number): Aluno {

        const aluno = this.DATABASE.filter(aluno => aluno.id === id);
        return aluno[0];

    }


    public DeleteAluno(id: number): void {

        const listaAlunos = this.DATABASE.map(aluno => aluno.id);

        const index = listaAlunos.indexOf(id);

        if (index != -1) {
            delete this.DATABASE[index];

        }
    }
}