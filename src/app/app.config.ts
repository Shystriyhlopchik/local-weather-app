import {ApplicationConfig} from '@angular/core';

import {provideHttpClient} from '@angular/common/http';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        provideHttpClient(),
        provideAnimationsAsync(),
        provideAnimationsAsync(),
        provideAnimationsAsync(),
    ],
};
