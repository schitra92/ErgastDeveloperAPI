import { Component, OnInit } from '@angular/core';
import { HttpClient }  from '@angular/common/http';



@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
myData : any = [];
  constructor(private http: HttpClient) { }
  ngOnInit(){
       let years = [
         {"id":2005,"value":"2005"},
         {"id":2006,"value":"2006"},
         {"id":2007,"value":"2007"},
         {"id":2008,"value":"2008"},
         {"id":2009,"value":"2009"},
         {"id":2010,"value":"2010"},
         {"id":2011,"value":"2011"},
         {"id":2012,"value":"2012"},
         {"id":2013,"value":"2013"},
         {"id":2014,"value":"2014"},
         {"id":2015,"value":"2015"}
       ];
       this.years=years;
       console.log(years);

  }
  onChange(event) {
    this.http.get('http://ergast.com/api/f1/'+event+'/drivers.json')
             .subscribe((res) =>{
            this.myData = res.MRData.DriverTable.Drivers;
               console.log(this.myData);
             },
           error => {
           alert("ERROR");
         });
      console.log(event);
    }
}
