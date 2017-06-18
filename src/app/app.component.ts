import {Component, Input, OnInit} from '@angular/core';

import {User} from './model/user';

import {ServicesService} from './services/services.service';

@Component({

  selector: 'app-user-list-item',

  templateUrl: './user-list-item.component.html',

  styleUrls: ['./user-list-item.component.css']

})

export class UserListItemComponent implements OnInit {

  @Input() private user: User;

  constructor() { }

  ngOnInit() {

  }

  private clickMe(): void {

    alert(this.user.name);

  }

}


@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})
export class AppComponent {

  private myInputValue: string;

}
