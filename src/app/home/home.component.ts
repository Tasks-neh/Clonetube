import { Component, OnInit } from '@angular/core';
import { Objcard } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  data:Array<Objcard>=[
    {
      name: 'hello',
      url:'https://www.youtube.com/watch?v=9CVZks6U0ZY&list=PL8p2I9GklV45JZerGMvw5JVxPSxCg8VPv&ab_channel=CodeStepByStep',
      videoId:'GYAB4Td62zI',
      
    },
    {
      name: 'hello1',
      url:'https://www.youtube.com/watch?v=JepMpjhkt-4&ab_channel=EfficientUser',
      videoId:'xGpHfFf18Ns',
      
    },
    {
      name: 'hello2',
      url:'https://www.youtube.com/watch?v=r2ga-iXS5i4&ab_channel=Academind',
      videoId:'r2ga-iXS5i4',
      
    }

  ]
  constructor(){
    this.data.forEach((element)=>{
      console.log(element.name);
    })
  }
  
}

  

  

