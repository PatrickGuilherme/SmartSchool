import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public professorForm: FormGroup;
  public titulo = "Professores";
  public professorSelecionado: Professor;

  public professores =[
    {id: 1, nome: 'Soussa', disciplina: 'Banco de dados'},
    {id: 2, nome: 'Sergio', disciplina: 'Padrões de projeto'},
    {id: 3, nome: 'Lapa', disciplina: 'Linguagem de programação'},
    {id: 4, nome: 'Hilton', disciplina: 'UI/UX'},
    {id: 5, nome: 'Hernane', disciplina: 'Grafos'},
  ]

  constructor(private fb: FormBuilder) {
    this.CriarForm()
  }


  ngOnInit() {
  }

  public CriarForm() {
    this.professorForm = this.fb.group({
      nome: ['',Validators.required],
      disciplina: ['', Validators.required]
    })
  }

  public AlunoSubmit(){
    console.log(this.professorForm.value);
  }


  public ProfessorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  public Voltar(){
    this.professorSelecionado = null;
  }
}
