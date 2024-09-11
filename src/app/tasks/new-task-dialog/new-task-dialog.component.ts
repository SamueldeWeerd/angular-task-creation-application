import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData, Task } from '../task/task.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-task-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task-dialog.component.html',
  styleUrl: './new-task-dialog.component.css'
})
export class NewTaskDialogComponent {
  @Output() cancelAddingTask = new EventEmitter<void>();
  @Output() addNewTask = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelAddingTask() {
    this.cancelAddingTask.emit()
  }

  onSubmittedForm() {
    this.addNewTask.emit({title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDate});
  }

}
