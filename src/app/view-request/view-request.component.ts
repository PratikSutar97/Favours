import { Component, OnInit, ViewChild, ChangeDetectorRef, Inject } from '@angular/core';
import { Requests } from './requests';
import {RequestService} from '../request.service';
import {MatAccordion} from '@angular/material/expansion';
import {MatDialog} from '@angular/material/dialog';
import {AcceptRequestDialogComponent} from './accept-request-dialog/accept-request-dialog.component';
@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css'],
})

export class ViewRequestComponent implements OnInit {
  
  constructor(
    private service:RequestService,
    public dialog:MatDialog
  ) { }
  @ViewChild(MatAccordion) accordion: MatAccordion;

  breakpoint: number;
  currentRequestID = null;
  viewData=[];
  id;
  file:ImageBitmap;
  
  ngOnInit(): void {
  
    this.service.viewRequests()
      .subscribe(
        data=>{
          if (data) { 
            localStorage.setItem("activeRequests",data.length)
            hideloader(); 
          } 
          this.viewData=data
        }
    );
    function hideloader() { 
      // Setting display of spinner 
      // element to none 
      document.getElementById('loading') 
          .style.display = 'none'; 
          document.getElementById('loadings') 
          .style.display = 'none'; 
          
    }
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
  openAcceptRequestDialog(): void {
    const dialogRef = this.dialog.open(AcceptRequestDialogComponent, {
      width: '450px',
      data: {name: this.id, animal: this.file}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
