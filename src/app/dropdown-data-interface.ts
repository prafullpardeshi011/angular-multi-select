export interface CountryAllData {
  id: Number;
  name: String;
  states: {
  	stateName: String;
  	stateId: Number,
  	cities: {
		name: String;
		id: Number;
  	}
  }
}
