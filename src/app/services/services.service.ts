import { Injectable } from '@angular/core';

import {User} from '../model/user';

import {Observable} from 'rxjs/Observable';

import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ServicesService {

  constructor(private http: Http) { }

  public getAjaxUsersList(): Promise<Array<User>> {

    return this.http.get('http://musuperrest.ru/v1/api/users')

      .map((res) => res.json() as Array<User>).toPromise();

  }

  public getUsersList(): Array<User> {

    return [

      <User> {

        age: 22,

        name: 'User 1',

        superPower : true

      },

      <User> {

        age: 21,

        name: 'User 2',

        superPower : false

      },

      <User> {

        age: 29,

        name: null,

        superPower : false

      }

    ];

  }

}

