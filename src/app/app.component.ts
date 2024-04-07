import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Welcome to Angular Directives!';
  description = 'This is my description.';
  isDirect = true;
  products = ['laptop', 'mobile', 'camera', 'watch'];
  angularLogo =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';
  colSpan = 2;
  isActive = false;
}
