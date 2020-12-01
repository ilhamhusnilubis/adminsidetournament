import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostComponent } from './modules/post/post.component';
import { TurnamentComponent } from './modules/turnament/turnament.component';

const routes: Routes = [{
  path:'',
  component:DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent
  }, {
    path:'post',
    component:PostComponent
  },{
    path:'turnament',
    component:TurnamentComponent
  },
  {
    path:'articles',
    component:ArticlesComponent
  }]
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
