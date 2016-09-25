import { Component } from '@angular/core';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  page = '';

  conferenceDate = '2047-05-17';

  constructor() {
    this.page = localStorage.getItem('aboutPageContent');
  }
}
