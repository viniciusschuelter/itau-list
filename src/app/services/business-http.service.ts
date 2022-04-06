import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {BusinessInterface} from "../models/business.model";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root',
})

export class BusinessHttpService {
  url = environment.apiBase;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {  }

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
    const message = (error.error?.message ? error.error?.message : error.message) || 'Something is wrong!'
    this.toastr.error(message, 'Error');
    return throwError(message);
  }
}
