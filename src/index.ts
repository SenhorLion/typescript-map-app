console.log('Parcel locked n loaded');
import { createUser } from './components/User';
import { createCompany } from './components/Company';
import { CustomMap } from './components/Map';

const user = createUser({ name: 'Lion' });
const company = createCompany();
const customMap = new CustomMap();

console.log('@user', user);
console.log('@company', company);

// set data in client
const userUI = document.getElementById('user');
const titleUser = document.createElement('h2');
titleUser.innerHTML = user.name;

const companyUI = document.getElementById('company');
const titleCompany = document.createElement('h2');
titleCompany.innerHTML = company.name;

companyUI.appendChild(titleCompany);
userUI.appendChild(titleUser);
