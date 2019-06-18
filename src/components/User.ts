import faker from 'faker';
import { Mappable } from './Map';

class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() {
    return `
    <h1>${this.name}</h1>`;
  }
}

// Use a factory function to return the new User instance
// this  avoids a consumer of this module from having to use 'new'
// and removes the perils of 'this' (and forgetting to call with 'new'!)
export const createUser = ({ name }) => {
  return new User();
};
