
import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	// required variable declaration goes here 
	CountryPlaceHolder: String = 'Select countries';
	StatePlaceHolder	: String = 'Select states';
	CityPlaceHolder: String = 'Select cities';
	localFields: Object = { text: 'name', value: 'id' };
	countrySelected: string[];
	stateSelected: string[];
	citySelected: string[];
	states: Array<any>;
	cities :Array<any>;
	data: Array<any>;

	constructor( private CountryService: CountryService) {
		this.data = this.CountryService.getCountryData();
	}

    onCountrySelected() {
		/*
		action to be perform after coutry changed
		*/
		this.states = [];
		this.stateSelected = [];
        this.cities = [];
        this.citySelected = [];
        for(let i=0;i<this.data.length;i++){
            if(this.countrySelected.indexOf(this.data[i].id) > -1) {
            	for(let j=0;j<this.data[i].states.length;j++){
	            	this.states.push({name: this.data[i].states[j].stateName, id: this.data[i].states[j].stateId});
            		for(let k=0;k<this.data[i].states[j].cities.length;k++){
            			this.cities.push({name: this.data[i].states[j].cities[k].name, id:this.data[i].states[j].cities[k].id });
        			}
            	}
            }
        } 
    }

    onStateSelected() {
    	/*
		action to be perform after state changed
		*/
    	this.cities = [];

    	this.citySelected = [];
    	for(let i=0;i<this.data.length;i++){
    		if(this.countrySelected.indexOf(this.data[i].id) > -1) {
    			for(let j=0;j<this.data[i].states.length;j++){
    				if(this.stateSelected.indexOf(this.data[i].states[j].stateId) > -1) {
    					for(let k=0;k<this.data[i].states[j].cities.length;k++){
            				this.cities.push({name: this.data[i].states[j].cities[k].name, id: this.data[i].states[j].cities[k].id});
        				}
    				}
    			}
			}
		}
    }

	onCitySelected() {

	}
}
