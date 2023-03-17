import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './components/calc/calc.component';


const routes: Routes = [

  {path: 'calculadora', component: CalcComponent},
  { path: '',   redirectTo: '/calculadora', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
