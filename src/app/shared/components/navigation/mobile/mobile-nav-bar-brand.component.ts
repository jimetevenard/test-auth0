import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-nav-bar-brand',
  template: `
    <div class="mobile-nav-bar__brand">
      <a (click)="onMobileNavBarBrandClick()" routerLink="/">
        <img
          class="mobile-nav-bar__logo"
          src="https://jimetevenard.github.io/test-auth0/assets/JIM.png"
          alt="Auth0 shield logo"
          height="24"
        />
      </a>
    </div>
  `,
})
export class MobileNavBarBrandComponent {
  @Output() mobileNavBarBrandClick = new EventEmitter<void>();

  onMobileNavBarBrandClick(): void {
    this.mobileNavBarBrandClick.emit();
  }
}
