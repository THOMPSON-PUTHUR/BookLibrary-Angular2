import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { commonsrouting, commonsRoutingProviders } from './routes/app.common.routes';
import { CommonsEventsService } from './services/events/events.service';
import { Httpprovider } from './services/http/http.service';
import { CommonsObjectsService } from './services/objects/objects.service';
import {ConfigService} from './services/config/config.service';

import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ErrorComponent } from './components/error/error.component';
import { CommonsloginComponent } from './components/login/login.component';
import { NavbrandComponent } from './components/nav/navbrand/navbrand.component';
import { NavheaderComponent } from './components/nav/navheader/navheader.component';
import { NavlistComponent } from './components/nav/navlist/navlist.component';
import { NavmainComponent } from './components/nav/navmain/navmain.component';
import { NavsearchComponent } from './components/nav/navsearch/navsearch.component';
import { FilterDirective } from './directives/filter/filter.directive';
import { SearchDirective } from './directives/search/search.directive';
import { CommonsregisterComponent } from './components/register/register.component';
import { RepeatdomPipe } from './pipes/repeatdom/repeatdom.pipe';
import { AppLogoutComponent } from './components/logout/logout.component';
import { DatalistComponent } from './components/datalist/datalist.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { SearchPipe } from './pipes/searchpipe/searchpipe.pipe';
import { DataobjtoarrPipe } from './pipes/dataobjtoarr/dataobjtoarr.pipe';
import {RestApisService} from './services/restapis/restapis.service';

@NgModule({
  imports: [
    CommonModule, BrowserModule, HttpModule, BrowserModule, FormsModule, commonsrouting
  ],
  exports: [
    AutocompleteComponent, ErrorComponent, 
    CommonsloginComponent, CommonsregisterComponent,
    NavbrandComponent, NavheaderComponent, 
    NavlistComponent, NavmainComponent, NavsearchComponent, 
    FilterDirective, SearchDirective,  CommonsregisterComponent, 
    RepeatdomPipe, commonsRoutingProviders, 
    AppLogoutComponent, DatalistComponent, SearchboxComponent,
    SearchPipe, DataobjtoarrPipe
  ],
  declarations: [
    AutocompleteComponent, ErrorComponent, 
    CommonsloginComponent, 
    NavbrandComponent, NavheaderComponent, 
    NavlistComponent, NavmainComponent, NavsearchComponent,   
    FilterDirective, SearchDirective, CommonsregisterComponent, RepeatdomPipe, 
    AppLogoutComponent, DatalistComponent, SearchboxComponent, SearchPipe, DataobjtoarrPipe
    ],
    providers: [
      commonsRoutingProviders, CommonsEventsService, Httpprovider, 
      CommonsObjectsService, ConfigService, SearchPipe, DataobjtoarrPipe, RestApisService
    ],
    bootstrap: []
})
export class CommonsModule { }
