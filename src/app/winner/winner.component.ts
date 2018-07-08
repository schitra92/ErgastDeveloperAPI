import { Component, OnInit } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit{
 //worldChampion:any =[];
  constructor(private http: HttpClient) {
 }
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
  getData(event){
  this.http.get('http://ergast.com/api/f1/'+event+'/results/1.json')
           .subscribe((res) =>{
          this.winners = res.MRData.RaceTable.Races;
          this.raceData = res.MRData;

           },
         error => {
         alert("ERROR");
       });
  }

}
