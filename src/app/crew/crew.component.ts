import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  selectedAstronaut: object;
  astronautSelected: boolean = false;

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate) {
    let present = false;
    let index = 0;
    for(let i = 0; i < this.crew.length; i++) {
      if (this.crew[i] === candidate) {
        present = true;
        index = i;
      }
    }
    if (this.crew.length < 3 && !present) {
      this.crew.push(candidate);
    } else if (present) {
      this.crew.splice(index, 1);
    }
  }
  modSelectedAstronaut(astronaut) {
    if (typeof this.selectedAstronaut == "undefined") {
      this.selectedAstronaut = astronaut;
      this.astronautSelected = true;
    } else if (astronaut == this.selectedAstronaut) {
      this.selectedAstronaut = null;
      this.astronautSelected = false;
    } else {
      this.selectedAstronaut = astronaut;
      this.astronautSelected = true;
    }
  }
}
