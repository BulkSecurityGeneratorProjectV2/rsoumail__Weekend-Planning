import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

@Injectable()
export class AuthServerProvider {

    constructor(
        private http: Http
    ) {}

    login(credentials): Observable<any> {
        const data = 'username=' + encodeURIComponent(credentials.username) +
            '&password=' + encodeURIComponent(credentials.password) + '&submit=Login';
        const headers = new Headers ({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        return this.http.post(SERVER_API_URL + 'api/authentication', data, { headers });
    }

    logout(): Observable<any> {
        // logout from the server
        return this.http.post(SERVER_API_URL + 'api/logout', {}).map((response: Response) => {
            // to get a new csrf token call the api
            // this.http.get(SERVER_API_URL + 'api/account').subscribe(() => {}, () => {});
            // return response;
        });
    }
}
