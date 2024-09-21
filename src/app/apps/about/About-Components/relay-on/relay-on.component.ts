import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  relayOn = [
    {
      icon: 'sl-icon-target text-white',
      field: 'Focus on the Essence',
      fieldText: 'We focus on what really matters for your business: a digital presence that impacts.'
    },
    {
      icon: 'sl-icon-mouse text-white',
      field: 'Custom Design',
      fieldText: 'Each project is unique, and that is how we treat it, with personalized solutions to your needs.'
    },
    {
      icon: 'sl-icon-earphones-alt text-white',
      field: 'Personalized Attention',
      fieldText: 'We are at your side from the initial idea to implementation and beyond.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
