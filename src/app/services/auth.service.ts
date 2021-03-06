import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../interfaces/user';

@Injectable({ providedIn: 'root' })

export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private apiU = 'http://visrv.leonisa.com/Aplicativos_Informaticos/ServiceExitoRDLCore/api/pos/user'

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        // return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
        return this.http.post<any>(`${this.apiU}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        localStorage.removeItem('log');
        this.currentUserSubject.next(null);
    }
    
    async getLogin() {
        return await localStorage.getItem('log');
    }

    async setLogin(login: string) {
        await localStorage.setItem('log', login);
    }

}



