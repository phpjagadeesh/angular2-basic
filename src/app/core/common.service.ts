import { Collectable } from './common.module';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
  
  constructor(private http: Http) { }

  getDetails() {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=UTF-8');  
  
    return this.http.get('http://echo.jsontest.com/key/value/one/two')
      .map(response => response.json());
  }

  getMedicalResult() {
    var body = '{"sex":"male", "age":30, "evidence":[{"id":"s_100", "choice_id":"present"}]}';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('App-Id', 'b36eb898');
    headers.append('App-Key', '828a294c228aa34fec8f618c0fae6328');  
    let commentsUrl = 'https://api.infermedica.com/v2/diagnosis'; 
    let options = new RequestOptions({ headers: headers });

    return this.http.post(commentsUrl, body, options)
      .map(response => response.json());
    }   
}
