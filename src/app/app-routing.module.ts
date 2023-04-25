import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TeknivaComponent } from './tekniva/tekniva.component';

const routes: Routes = [

  {path:'',data:{Breadcrumb : 'tekniva'},component:TeknivaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
