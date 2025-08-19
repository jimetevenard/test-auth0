import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-brand',
  template: `
    <div class="nav-bar__brand">
      <a routerLink="/">
        <img
          class="nav-bar__logo"
          src="/assets/JIM.png"
          alt="Auth0 shield logo"
          height="36"
        />
      </a>
    </div>
  `,
})
export class NavBarBrandComponent {}
