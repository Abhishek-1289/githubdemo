import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.page.html',
  styleUrls: ['./add-details.page.scss'],
})
export class AddDetailsPage implements OnInit {

student={
  fname: '',
  lname: '',
  email: '',
  mnum : '',
  gender:''
}
 

 sub(){
    console.log(this.student)

 }
  constructor() { }

  ngOnInit() {
  }

}
