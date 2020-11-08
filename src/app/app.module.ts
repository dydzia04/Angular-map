import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarMapAndInfoComponent } from './top-bar-map-and-info/top-bar-map-and-info.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { SideMapAdditionalDataComponent } from './side-map-additional-data/side-map-additional-data.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LegendAreasComponent } from './legend-areas/legend-areas.component';
import { LegendFlowsComponent } from './legend-flows/legend-flows.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarMapAndInfoComponent,
    MapContainerComponent,
    SideMapAdditionalDataComponent,
    LegendAreasComponent,
    LegendFlowsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
