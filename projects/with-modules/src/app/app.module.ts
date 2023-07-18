import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { MAT_DATE_FORMATS } from "@angular/material/core";
import { MY_FORMATS } from "./sub-component/sub-component.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot([
      {
        path: "",
        loadChildren: () =>
          import("./sub-component/sub-component.component").then(
            (m) => m.SubComponentModule
          ),
      },
    ]),
  ],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useFactory: () => {
        console.error("module formats");
        return MY_FORMATS;
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
