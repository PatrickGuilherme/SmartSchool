import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;

  public alunos = [
    {id: 1, nome: 'Patrick', sobrenome: 'Oliveira', telefone: 38665543},
    {id: 2, nome: 'Guilherme', sobrenome: 'Santos', telefone: 38665543},
    {id: 3, nome: 'Jeferson', sobrenome: 'Machado', telefone: 38665543},
    {id: 4, nome: 'Roberta', sobrenome: 'Nogueira', telefone: 38665543},
    {id: 5, nome: 'Robert', sobrenome: 'Gusmão', telefone: 38665543}
  ]

  constructor(private fb: FormBuilder) {
    this.CriarForm()
  }

  ngOnInit(): void {
  }

  public CriarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    })
  }

  public AlunoSubmit(){
    console.log(this.alunoForm.value);
  }

  public AlunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  public Voltar(){
    this.alunoSelecionado = null;
  }
}