import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movie/movies.component';


export const routes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'movies', component: MoviesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  