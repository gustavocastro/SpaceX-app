import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { SpxCrewService } from './services/crew/spx-crew.service';
import { AppRoutingModule } from './app-routing.module';
import { SpxTopbarComponent } from './components/spx-topbar/spx-topbar.component';
import { Features } from './state/features';
import { crewReducer } from './state/crew/crew.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
        {
            [Features.Crew]: crewReducer,
        },
    ),
    SpxTopbarComponent,
  ],
  providers: [
    provideHttpClient(withFetch()),
    SpxCrewService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
