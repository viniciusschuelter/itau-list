import {Injectable} from "@angular/core";
import {filter} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";
import {BusinessInterface} from "../models/business.model";


@Injectable({providedIn: 'root'})

export class BusinessService {

  private businessSubject = new BehaviorSubject<BusinessInterface[]>([]);

  public readonly business$ = this.businessSubject.asObservable().pipe(filter(data => !!data));

  getBusiness(): BusinessInterface[] {
    return this.businessSubject.getValue();
  }

  setBusiness(business: BusinessInterface[]): void {
    this.businessSubject.next(business);
  }
}
