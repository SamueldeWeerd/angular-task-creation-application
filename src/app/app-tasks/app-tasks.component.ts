import { Component, input, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './app-tasks.component.html',
  styleUrl: './app-tasks.component.css'
})

export class AppTasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
}
