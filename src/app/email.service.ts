import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private mailApi = 'https://mailthis.to/dhruvshah'

  constructor(private http: HttpClient) {
  }

  PostMessage(input: any) {
    return this.http.post(this.mailApi, input, {responseType: 'text'})
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            } else {
              return null;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }
}
