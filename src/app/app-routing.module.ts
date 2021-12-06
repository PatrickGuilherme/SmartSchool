import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Para adicionar uma nova tela é precisa criar um novo componente (COMANDO: ng g c nome-componente) */
import { AlunosComponent } from './alunos/alunos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProfessoresComponent } from './professores/professores.component';

/*A cada nova rota adicionar um objeto com path e component*/
/*INSTALA O BOOTSTRAP: npm install bootstrap */
/*INSTALA O NGXBOOTSTRAP: npm install ngx-bootstrap*/
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},//redireciona para o dashboard
  { path: 'professores', component: ProfessoresComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'perfil', component: PerfilComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
