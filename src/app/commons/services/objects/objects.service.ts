import { Injectable } from '@angular/core';
import {Httpprovider} from '../http/http.service';


@Injectable()
export class CommonsObjectsService {
  modules: any[] = [
    {site: 'admin', name: 'ADMIN'},
    {site: 'user', name: 'USERS'}
  ];

  shopmenuitems: any[] = [
    {url: '/shop/register', menu: 'Register', show: true, changable: true, active: false},
    {url: '/shop/login', menu: 'Login', show: true, changable: true, active: false},
    {url: '/shop/logout', menu: 'Logout', show: true, changable: true, active: false}
  ];

  adminmenuitems: any[] = [
    {url: '/admin', menu: 'Manage', show: false, changable: true, active: false},
    {url: '/admin/users', menu: 'Users', show: false, changable: true, active: false},
    {url: '/admin/products', menu: 'Products', show: false, changable: true, active: false},
    {url: '/admin/orders', menu: 'Orders', show: false, changable: true, active: false},
    {url: '/admin/login', menu: 'Login', show: true, changable: true, active: false},
    {url: '/admin/logout', menu: 'Logout', show: false, changable: true, active: false}
  ];

  constructor(private _httpprovider: Httpprovider) {
    
   }

}
