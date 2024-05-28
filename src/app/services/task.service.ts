import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root',
}) //coloca no root do projeto de forma dinamica
export class TaskServices {
  private url = environment.api;

  constructor(private httpClient: HttpClient) {}

  getTasks() {
    return this.httpClient.get<Task[]>(this.url + '/api/tasks');
  }

  addNewTask(task:Task) {
    return this.httpClient.post<Task>(this.url + '/api/tasks', task)
  }



  doneTask(id: number) {
    return this.httpClient.put<number>(`${this.url}/api/tasks/${id}/complete`, id)
  }
}
