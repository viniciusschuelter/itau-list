import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {BusinessInterface} from "../models/business.model";

@Injectable({
  providedIn: 'root',
})

export class BusinessService {
  url = environment.apiBase;

  constructor(private http: HttpClient) {  }

  public getAllBusiness(): Observable<BusinessInterface[]> {
    return this.http
      .get<BusinessInterface[]>(`${this.url}/itau_teste`)
      .pipe(
        map((data: BusinessInterface[]) => data),
        catchError(this.handleErrors)
      );
  }


  public getBusinessById(businessId: string): Observable<BusinessInterface> {
    return this.http
      .get<BusinessInterface>(`${this.url}/itau_teste/${businessId}`)
      .pipe(
        map((data: BusinessInterface) => data),
        catchError(this.handleErrors)
      );
  }

  private handleErrors(error: HttpErrorResponse) {
    if (error) {
      return throwError(
        error.error?.message ? error.error?.message : error.message
      );
    } else {
      return throwError('Something wrong!');
    }
  }
}
