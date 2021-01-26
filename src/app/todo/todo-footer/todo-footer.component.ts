import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
  ]
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;
  pendientes: number;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.contarPendientes( state.todos )
      this.filtroActual = state.filtro;
    })
  }

  cambiarFiltro( nuevoFiltro: fromFiltro.filtrosValidos ) {
    const action = new fromFiltro.SetFiltroAction( nuevoFiltro )
    this.store.dispatch( action )
  }

  contarPendientes( todos: Todo[] ) {
    this.pendientes = todos.filter( todo => !todo.completado ).length;
  }

  limpiarCompletados() {
    console.log("limpiar");
    const action = new fromTodo.LimpiarCompletadosAction()
    this.store.dispatch( action )
  }

}
