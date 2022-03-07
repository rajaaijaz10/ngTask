import { SubjectsService } from './../subjects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  subjects:String[]=[];
  // service:SubjectsService=new SubjectsService();
  constructor(service:SubjectsService) {
    this.subjects=service.getsubjects();
   }

  ngOnInit(): void {
  }

  
    
  
}
