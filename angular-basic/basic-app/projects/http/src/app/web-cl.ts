import { Observer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ResObj } from './app.component';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class WebCl {

    constructor(
        private http: HttpClient
    ) {

    }
    users(): Observable<ResObj> {
        return this.http.get<ResObj>('https://reqres.in/api/users')
    }

    save(obj: object): Observable<object> {
        return this.http.post<object>('https://reqres.in/api/users', obj, {
            headers: {
                'Accept': 'application/json'
            }
        })
    }
}