import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpxStarlinkListComponent } from './components/spx-starlink/list/starlink-list/spx-starlink-list.component';
import { SpxStarlinkDetailsComponent } from './components/spx-starlink/details/spx-starlink-details/spx-starlink-details.component';
import { SpxCrewListComponent } from './components/spx-crew/list/spx-crew-list/spx-crew-list.component';
import { SpxCrewDetailsComponent } from './components/spx-crew/details/spx-crew-details/spx-crew-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/crew',
        pathMatch: 'full',
    },
    {
        path: 'crew',
        component: SpxCrewListComponent,
    },
    {
        path: 'crew/:id',
        component: SpxCrewDetailsComponent,
    },
    {
        path: 'starlink',
        component: SpxStarlinkListComponent,
    },
    {
        path: 'starlink/:launchId',
        component: SpxStarlinkDetailsComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }