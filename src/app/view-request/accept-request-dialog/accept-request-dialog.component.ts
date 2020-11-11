import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { exit } from 'process';

@Component({
  selector: 'app-accept-request-dialog',
  templateUrl: './accept-request-dialog.component.html',
  styleUrls: ['./accept-request-dialog.component.css']
})
export class AcceptRequestDialogComponent implements OnInit {

  constructor(
    
    public dialogRef: MatDialogRef<AcceptRequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { 
    }

  fileControl: FormControl;
  public files;
  errorMsg = '';
  confirmationMsg = '';

  ngOnInit(): void {
  }

  complete() {
    console.log(this.files);
    
  }
  onFileChanged(event){
    this.files = event.target.files[0]
  }
}
