import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WatchGridComponent} from './watch-grid/watch-grid.component';
import {WatchDetailComponent} from './watch-detail/watch-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/watches', pathMatch: 'full'},
  {path: 'watches', component: WatchGridComponent},
  {path: 'watch/:id', component: WatchDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
