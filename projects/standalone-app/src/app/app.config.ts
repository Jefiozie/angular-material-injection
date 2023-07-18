import { ApplicationConfig, makeEnvironmentProviders } from "@angular/core";
import { MAT_DATE_FORMATS } from "@angular/material/core";
import { provideRouter } from "@angular/router";
// import { MY_FORMATS } from "./sub-component/sub-component.component";
export const MY_FORMATS = {
  parse: {
    dateInput: "MM/YYYY",
  },
  display: {
    dateInput: "MM/YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY",
  },
};

const provideDateFormats = () => {
  return { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS };
};

const provideDateFormatsWithEnvironments = () => {
  return makeEnvironmentProviders([
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]);
};

export const appConfig: ApplicationConfig = {
  providers: [
    // provideDateFormats(),
    // provideDateFormatsWithEnvironments(),
    provideRouter([
      {
        path: "",
        loadComponent: () => import("./sub-component/sub-component.component"),
        // providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
      },
    ]),
    // { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
};
