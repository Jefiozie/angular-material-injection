import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  //   date = new FormControl(moment());
  //   // this is just here for debugging purposes
  //   formats = inject(MAT_DATE_FORMATS);
  //   setMonthAndYear(
  //     normalizedMonthAndYear: Moment,
  //     datepicker: MatDatepicker<Moment>
  //   ) {
  //     const ctrlValue = this.date.value!;
  //     ctrlValue.month(normalizedMonthAndYear.month());
  //     ctrlValue.year(normalizedMonthAndYear.year());
  //     this.date.setValue(ctrlValue);
  //     datepicker.close();
  //   }
}
