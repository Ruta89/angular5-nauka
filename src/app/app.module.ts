import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TasksService } from './services/tasks.service';
import { CheckedDirective } from './shared/checked.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    DoneTaskComponent,
    TodoTaskComponent,
    CheckedDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
