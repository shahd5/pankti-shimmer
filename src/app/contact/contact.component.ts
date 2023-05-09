import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmailService} from '../email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  jobForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  preview: string = '';

  constructor(private emailService: EmailService) {

  }

  ngOnInit(): void {
  }

  save() {
    this.preview = JSON.stringify(this.jobForm.value);
    console.log(this.preview)
    console.log(FormData)
    this.emailService.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({error})
      })
  }

}
