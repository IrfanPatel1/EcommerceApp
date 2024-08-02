import { Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { HouseholdComponent } from './household/household.component';
import { PersonalcareComponent } from './personalcare/personalcare.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    // { path component } 
    { path:'food', component:FoodComponent },
    { path:'beverages', component:BeveragesComponent },
    { path:'household', component:HouseholdComponent },
    { path:'personalcare', component:PersonalcareComponent },
    { path:'login', component:LoginComponent },
];
