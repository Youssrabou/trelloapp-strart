import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../shared/Servicies/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder , private contactService:ContactService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      first: ['', Validators.minLength(2)],
      last: ['', Validators.minLength(2)],
      phone: ['', Validators.required],
      email: ['', Validators.email]
    })
  }

  onSubmit(form) {
     //console.log(form)
     console.log(form.value);
   
    if( form.status ==='VALID') {
       this.contactService.postContactToApi(form.value);

    }
  
  }


}
