import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './juegos/listado/listado.component';
import { FormComponent } from './juegos/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoComponent
  },
  {
    path: 'crear',
    component: FormComponent
  },
  {
    path: 'editar/:id',
    component: FormComponent
  },
  {
    path: 'eliminar/:id',
    component: FormComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
