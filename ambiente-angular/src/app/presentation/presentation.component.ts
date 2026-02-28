import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  goToGithub() {
    window.open('https://github.com/marcionoronha1995', '_blank');
  }
}
