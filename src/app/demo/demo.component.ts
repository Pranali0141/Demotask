import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  AllData:any=[];
  
  constructor(private api:ApiService){
    this.featchdata();
  }


  featchdata(){
    this.api.getdata().subscribe(res=>{
      this.AllData = res;
      console.log(res);
      
    })
  }

  Onsubmit(product:any){
    this.api.pushdata(product).subscribe(res=>{
     console.log(res);
     this.AllData.push(res);
    
    })
  }



}
