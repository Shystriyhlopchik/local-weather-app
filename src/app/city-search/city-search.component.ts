import { Component, OnInit } from '@angular/core'
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIcon, MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { WeatherService } from '../weather/weather.service'
import { debounceTime } from 'rxjs/operators'
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-city-search',
    templateUrl: './city-search.component.html',
    styleUrl: './city-search.component.css',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIcon,
        NgIf,
    ],
})
export class CitySearchComponent implements OnInit {
    search = new FormControl('', [Validators.minLength(2)])

    constructor(private weatherService: WeatherService) {}

    ngOnInit(): void {
        this.search.valueChanges
            .pipe(debounceTime(1000))
            .subscribe((searchValue: string | null) => {
                if (!this.search.invalid && searchValue) {
                    const userInput = searchValue.split(',').map((s) => s.trim())
                    this.weatherService.updateCurrentWeather(
                        userInput[0],
                        userInput.length > 1 ? userInput[1] : undefined
                    );
                }
            })
    }

    getErrorMessage() {
        return this.search.hasError('minLength')
            ? 'Type more than one character to search'
            : ''
    }
}
