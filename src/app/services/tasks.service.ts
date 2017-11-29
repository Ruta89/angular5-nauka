import { Task } from '../models/task';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TasksService {
  private tasksList: Array<Task> = [];
  private tasksDone: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    console.log('TasksService');
    this.tasksList = [
      { name: 'zadnie 1', created: new Date() },
      { name: 'zadnie 2', created: new Date() },
      { name: 'zadnie 3', created: new Date() },
      { name: 'zadnie 4', created: new Date() }
    ];
    this.tasksListObs.next(this.tasksList);
  }

  add(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }
  remove(task: Task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObs.next(this.tasksList);
  }
  done(task: Task) {
    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }
}
