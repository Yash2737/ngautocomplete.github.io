import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DenailServiceService {

  constructor(private http: Http) {
    console.log("in service");
  }

  GetAllDenialCode(term): any {
    if (term) {

      return this.http.get('http://192.168.0.101:1099' + '/api/get-denial-codes/1', { headers: new Headers({ 'Access_Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VyX0lkIjoxODEsIkZ1bGxfTmFtZSI6Illhc2ggU3VwZXJ2aXNvciIsIlJvbGVfTmFtZSI6IlN1cGVydmlzb3IiLCJMb2dpbl9EYXRlVGltZSI6IjIwMTktMDQtMDFUMTQ6MjQ6NDIuMjM0ODMwMyswNTozMCIsIkNsaWVudHMiOlt7IkNsaWVudF9JZCI6MSwiQ2xpZW50X05hbWUiOiJDUlpfQVIifV19.QVcVF0-Pur0QCXob1UYoBslWNugvj3KxcgMZR5XcKIc' }) })
        .pipe(map(res => {
          var aa = [];
          aa = res.json().Data.map(function (item) {
            return item['Denial_Code'];
          });
          console.log(aa);
          return aa

        }));
    }
    return [];
  }
}
