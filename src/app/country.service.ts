import { Injectable } from '@angular/core';
import { dropDownAllData } from './mock-dropdown-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }


  getCountryData() {
    	return dropDownAllData;
  }
}
