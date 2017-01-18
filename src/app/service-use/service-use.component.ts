import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/common.service';

@Component({
  selector: 'app-service-use',
  templateUrl: './service-use.component.html',
  styleUrls: ['./service-use.component.css']
})

export class ServiceUseComponent {

  constructor(private commonService: CommonService) { 
    console.log(commonService.getDetails());
  }

}
