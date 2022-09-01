import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

//Using Resolvers to set page titles
@Injectable({ providedIn: 'root' })
export class CustomTitleResolver {
  resolve() {
    return Promise.resolve('Random Title');
  }
}

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'app-home',
  },
  { 
    path: 'about', 
    component: AboutComponent,
    title: CustomTitleResolver
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
