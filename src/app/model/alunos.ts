export class Aluno {

  public id: number;
  public name: string;
  public email: string;
  public age: number;
  
  public nota1: number;
  public nota2: number;


  public media: number;
  public status: string;

  constructor(id: number, name: string, age: number, nota1: number, nota2: number) {
    this.id = id;
    this.name = name;
    this.email = name.toLowerCase() + age + '@ifms.edu.br';
    this.age = age;
    this.nota1 = nota1;
    this.nota2 = nota2;

    this.media = (nota1 + nota2) / 2;

    this.status = this.media >= 6 ? 'Aprovado' : 'Reprovado'
  }
}
