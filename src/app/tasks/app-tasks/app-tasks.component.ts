import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from "../new-task/new-task.component";
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './app-tasks.component.html',
  styleUrl: './app-tasks.component.css'
})

export class AppTasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  @Output() startAddingTask = new EventEmitter();

private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService
  }

  hasStartedNewTask = false;

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId)
  }

  onStartAddTask() {
    this.hasStartedNewTask = true;
  }

  onCloseAddingTask() {
    this.hasStartedNewTask = false;
  }
}
