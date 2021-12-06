import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public titulo = 'Alunos';

  public alunos = [
    {nome: 'Patrick'},
    {nome: 'Guilherme'},
    {nome: 'Silva'},
    {nome: 'Roberta'},
    {nome: 'Silva'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
