import { Component } from '@angular/core';
import { Todo } from './modules/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todos: Todo[] = [];
  newTodo: string;

  saveTodo() {
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.completed = false;

      this.todos.push(todo);
      this.newTodo = '';
    }else{
      alert("Por favor preencha os dados da tarefa :)")
    }
  }

  done (id:number) {
    this.todos[id].completed = !this.todos[id].completed;
  }

  remove (id:number) {
    this.todos = this.todos.filter((v,i) => i !== id)
  }
}
