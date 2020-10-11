import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServicesOfferedComponent} from './services-offered/services-offered.component';
import {TaxupdatesComponent} from './taxupdates/taxupdates.component';
import {NewsComponent} from './news/news.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
{path:'Services',component:ServicesOfferedComponent},
{path:'Tax',component:TaxupdatesComponent},
{path:'News',component:NewsComponent},
{path:'Contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
