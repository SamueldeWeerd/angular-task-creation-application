import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task-dialog',
  standalone: true,
  imports: [],
  templateUrl: './new-task-dialog.component.html',
  styleUrl: './new-task-dialog.component.css'
})
export class NewTaskDialogComponent {
  @Output() cancelAddingTask = new EventEmitter<void>();

  onCancelAddingTask() {
    this.cancelAddingTask.emit()
  }

}
