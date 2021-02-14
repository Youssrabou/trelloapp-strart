import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/Servicies/contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  //varibale d'affichages dans HTML

  contacts;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

    //Request HTTP à /contacts
    this.contactService.getContactFromApi();
    //subscribe à un subject contact $;

    this.contactService.contacts$.subscribe( data => {
      this.contacts = data;
      console.log(data);
    }
    );
  }

}
