import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  private userList;

  constructor() {

  }

  ngOnInit() {

    this.userList = ['user 1', 'user 2', 'user 3'];
  }

}
