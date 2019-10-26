import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { NewComponent } from './new/new.component';
import { ParamComponentComponent } from './param-component/param-component.component';



const routes: Routes = [
  { path: 'new', component: ParamComponentComponent },
  { path: '', component: NewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
