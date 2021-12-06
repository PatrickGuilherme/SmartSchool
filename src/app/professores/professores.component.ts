import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  public titulo = "Professores";
  public professorSelecionado: string;

  public professores =[
    {id: '1', nome: 'Soussa', disciplina: 'Banco de dados'},
    {id: '2', nome: 'Sergio', disciplina: 'Padrões de projeto'},
    {id: '3', nome: 'Lapa', disciplina: 'Linguagem de programação'},
    {id: '4', nome: 'Hilton', disciplina: 'UI/UX'},
    {id: '5', nome: 'Hernane', disciplina: 'Grafos'},
  ]

  public ProfessorSelect(professor: any){
    this.professorSelecionado = professor.nome;
  }

  public Voltar(){
    this.professorSelecionado = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
