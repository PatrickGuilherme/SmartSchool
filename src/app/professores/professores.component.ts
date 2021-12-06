import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  public titulo = "Professores";
  public professorSelecionado: Professor;

  public professores =[
    {id: 1, nome: 'Soussa', disciplina: 'Banco de dados'},
    {id: 2, nome: 'Sergio', disciplina: 'Padrões de projeto'},
    {id: 3, nome: 'Lapa', disciplina: 'Linguagem de programação'},
    {id: 4, nome: 'Hilton', disciplina: 'UI/UX'},
    {id: 5, nome: 'Hernane', disciplina: 'Grafos'},
  ]

  public ProfessorSelect(professor: Professor){
    this.professorSelecionado = professor;
  }

  public Voltar(){
    this.professorSelecionado = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
