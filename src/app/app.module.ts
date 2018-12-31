import {NgProgressHttpModule} from '@ngx-progressbar/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgProgressModule} from '@ngx-progressbar/core';
import {HttpClientModule} from '@angular/common/http';
import {SlideshowModule} from 'ng-simple-slideshow';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {BottomBarComponent} from './bottom-bar/bottom-bar.component';
import {WatchItemComponent} from './watch-item/watch-item.component';
import {WatchGridComponent} from './watch-grid/watch-grid.component';
import {WatchDetailComponent} from './watch-detail/watch-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BottomBarComponent,
    WatchItemComponent,
    WatchGridComponent,
    WatchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule,
    FormsModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
