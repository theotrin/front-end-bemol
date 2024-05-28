import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { TaskServices } from './services/task.service';
import { Observable } from 'rxjs';
import { Task } from './models/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  tasks$ = new Observable<Task[]>();

  //form
  id:number;
  description = '';
  completed = '';

  todos:Task[] = [];

  newTodo: string;


  done(id: number) {
    this.todos[id].completed = !this.todos[id].completed;
  }

  remove(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  constructor(private taskService: TaskServices) {
    console.log(environment.api);
    this.getTasks();
    console.log('olha eu ', this.todos);
  }

  getTasks() {
    // this.taskService.getTasks().subscribe((tasks) => {
    //   this.todos = tasks;
    //   console.log(tasks)
    // }); jeito antigo velho

    this.tasks$ = this.taskService.getTasks();
  }

  addNewTask() {
    if(this.description) {
      this.taskService.addNewTask({description: this.description, completed: false})
      .subscribe(() => this.getTasks());

      this.description = '';

    }else{
      alert('Por favor preencha os dados da tarefa :)');
    }
  }

  doneTask(id: number) {

  }

  getIdTask(id:number) {
    this.taskService.doneTask(id).subscribe(() => this.getTasks())
  }

}
