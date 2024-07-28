import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodosAddComponent } from './pages/todos-add/todos-add.component';
import { TodosEditComponent } from './pages/todos-edit/todos-edit.component';

const routes: Routes = [
  { path : '', redirectTo:'todos/list', pathMatch: 'full' },
  { path : 'todos/list', component : TodoListComponent },
  { path : 'todos/form/ajouter', component : TodosAddComponent },
  { path : 'todos/form/modifier/:id', component : TodosEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
