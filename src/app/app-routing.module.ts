import { ImagensComponent } from './components/imagens/imagens.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'sobre', component: SobreComponent},
  {path:'imagens', component: ImagensComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
