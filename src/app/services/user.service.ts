import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {ApiService} from "./api.service";
import 'rxjs/add/operator/map';


import {Observable} from 'rxjs/Rx';


@Injectable()
export class UserService {

    constructor(private api: ApiService) {

    }


    getUsers(filter?: string): Observable<User[]> {

        let endPoint = '/' +filter;
        

        return this.api.get(endPoint).map(res => res.json() as User[]).catch(err => Observable.throw(err));
    }
  


    getUserRepositories(user: string): Observable<any> {

      let endPoint = '/users/' + user + '/repos';
      return this.api.get(endPoint).map(res => res.json()).catch(err => Observable.throw(err));
  }

}
