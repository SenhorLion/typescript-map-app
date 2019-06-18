import faker from 'faker';
import { Mappable } from './Map';

class Company implements Mappable {
  name: string;
  strapLine: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.strapLine = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() {
    return `
    <div>
    <h1>${this.name}</h1>
    <p>${this.strapLine}</p>
    </div>`;
  }
}

// Use a factory function to return the new Company instance
// this  avoids a consumer of this module from having to use 'new'
// and removes the perils of 'this' (and forgetting to call with 'new'!)
export const createCompany = () => {
  return new Company();
};
