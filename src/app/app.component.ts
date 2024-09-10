import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { AppTasksComponent } from './app-tasks/app-tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, AppTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  selectedUserId = '';

  get selectedUser() {
    return this.users.find((user) => this.selectedUserId === user.id);
  }

  onSelectUser(id: string) {
    console.log('selected user with id ' + id);
    this.selectedUserId = id;
  }
}
