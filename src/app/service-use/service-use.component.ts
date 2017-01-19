import { Component, OnInit } from '@angular/core';
import { CommonService } from '../core/common.service';

@Component({
  selector: 'app-service-use',
  templateUrl: './service-use.component.html',
  styleUrls: ['./service-use.component.css']
})

export class ServiceUseComponent implements OnInit {

  serviceGetResponse: string;
  servicePOSTResponse: string;

  constructor(private commonService: CommonService) {}
   
   ngOnInit() {

    this.commonService.getDetails().subscribe(
      response => this.serviceGetResponse
    );
    
    this.commonService.getMedicalResult().subscribe(
      response => this.servicePOSTResponse
    );

  }  
}
