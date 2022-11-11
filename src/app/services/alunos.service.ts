import { Aluno } from './../model/alunos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Aluno> {
    return this.http.get<Aluno>(`${API_CONFIG.baseUrl}/aluno/${id}`);
  }

  findAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${API_CONFIG.baseUrl}/aluno`);
  }

  create(alunos: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(`${API_CONFIG.baseUrl}/aluno`, alunos);
  }

  update(alunos: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(`${API_CONFIG.baseUrl}/aluno/${alunos.id}`, alunos);
  }

  delete(id: any): Observable<Aluno> {
    return this.http.delete<Aluno>(`${API_CONFIG.baseUrl}/aluno/${id}`);
  }
}
