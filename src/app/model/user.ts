export interface User {

  id: number;

  nome: string;

  email: string;

  password: number;

  status: boolean;

  confirmationToken: string;

  salt: string;

 // createAt: Date;

 // updateAt: Date;


  /*constructor(id: number, name: string, age: number, nota1: number, nota2: number) {
    this.id = id;
    this.name = name;
    this.email = name.toLowerCase() + age + '@ifms.edu.br';
    this.age = age;
    this.nota1 = nota1;
    this.nota2 = nota2;

    this.media = (nota1 + nota2) / 2;

    this.status = this.media >= 6 ? 'Aprovado' : 'Reprovado'
  }*/
}
