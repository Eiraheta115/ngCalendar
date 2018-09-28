import { Component } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //events: any[];
  title = 'my-angular-app';
  calendarOptions: Options;
  ngOnInit() {
  this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        selectable: true,
        events : [
          {
              "title": "All Day Event",
              "start": "2018-09-01"
          },
          {
              "title": "Decirle a mi osita que es hermosa",
              "start": "2018-09-07",
              "end": "2018-09-10"
          },
          {
              "title": "Repeating Event",
              "start": "2018-09-09T16:00:00"
          },
          {
              "title": "Repeating Event",
              "start": "2016-01-16T16:00:00"
          },
          {
              "title": "Conference",
              "start": "2016-01-11",
              "end": "2016-01-13"
          }
      ]
        
      };
      
  }
}