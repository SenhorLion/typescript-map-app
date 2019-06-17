import faker from 'faker';

class Company {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}

// Use a factory function to return the new Company instance
// this  avoids a consumer of this module from having to use 'new'
// and removes the perils of 'this' (and forgetting to call with 'new'!)
export const createCompany = () => {
  return new Company();
};
