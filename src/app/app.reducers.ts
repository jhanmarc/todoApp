import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todo/model/todo.model';
import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';
import { filtrosValidos } from './filter/filter.actions';


export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFiltro.filtroReducer
}