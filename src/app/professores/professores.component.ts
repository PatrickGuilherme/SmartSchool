import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  public titulo = "Professores"

  public professores =[
    {nome: 'Soussa'},
    {nome: 'Sergio'},
    {nome: 'Lapa'},
    {nome: 'Hilton'},
    {nome: 'Hernane'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
