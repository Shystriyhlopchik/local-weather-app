import {Component} from '@angular/core';
import {CitySearchComponent} from './city-search/city-search.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CurrentWeatherComponent} from './current-weather/current-weather.component';
import {FlexModule} from '@ngbracket/ngx-layout/flex';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        FlexModule,
        CurrentWeatherComponent,
        MatToolbarModule,
        MatCardModule,
        CitySearchComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'local-weather-app';
}
