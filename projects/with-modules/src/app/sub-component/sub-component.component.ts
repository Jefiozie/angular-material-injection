import { CommonModule } from "@angular/common";
import { Component, NgModule, inject } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MomentDateModule } from "@angular/material-moment-adapter";
import { MAT_DATE_FORMATS } from "@angular/material/core";
import {
  MatDatepicker,
  MatDatepickerModule,
} from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from "moment";
// tslint:disable-next-line:no-duplicate-imports
import { Moment } from "moment";

const moment = _moment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
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
@Component({
  selector: "app-sub-component",
  templateUrl: "./sub-component.component.html",
  styleUrls: ["./sub-component.component.css"],
})
export class SubComponentComponent {
  date = new FormControl(moment());
  // this is just here for debugging purposes
  formats = inject(MAT_DATE_FORMATS);
  setMonthAndYear(
    normalizedMonthAndYear: Moment,
    datepicker: MatDatepicker<Moment>
  ) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }
}

@NgModule({
  declarations: [SubComponentComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    CommonModule,
    MomentDateModule,
    RouterModule.forChild([
      {
        path: "",
        component: SubComponentComponent,
      },
    ]),
  ],
  // disabled this to test the upstream flow of injectors
  // providers: [
  //   {
  //     provide: MAT_DATE_FORMATS,
  //     useFactory: () => {
  //       console.error("module formats");
  //       return MY_FORMATS;
  //     },
  //   },
  // ],
})
export class SubComponentModule {}
