console.log('Parcel locked n loaded');
import { createUser } from './components/User';
import { createCompany } from './components/Company';
import { CustomMap } from './components/Map';

const user = createUser({ name: 'Lion' });
const company = createCompany();
const customMap = new CustomMap('map');
// Add makrers to map
customMap.addMarker(user);
customMap.addMarker(company);

// set User and Company info in client
const userUI = document.getElementById('user');
const companyUI = document.getElementById('company');
const titleUser = document.createElement('h2');
const titleCompany = document.createElement('h2');

titleUser.innerHTML = user.name;

titleCompany.innerHTML = company.name;

companyUI.appendChild(titleCompany);
userUI.appendChild(titleUser);
