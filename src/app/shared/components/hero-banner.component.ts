import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  template: `
    <div class="hero-banner hero-banner--aqua-emerald">
      <div class="hero-banner__logo">
        <img class="hero-banner__image" [src]="logo" alt="Angular logo" />
      </div>
      <h1 class="hero-banner__headline">TEST - Jim's App avec Auth0</h1>
      <p class="hero-banner__description">
        Ceci est une application Web de démo, dont le login est géré par un provider externe&nbsp;:&nbsp;<strong>Auth0</strong>
        <br>
        <small>il faut imaginer <strong>Tec-Tech</strong> à la place de cette appplication</small>
      </p>
      <p class="hero-banner__description yop">
        Utilisez les boutons <strong>Sign Up</strong>&nbsp;et&nbsp;<strong>Log In</strong>
        <br>
        <small> en haut à droite de l'écran</small>
      </p>
    

      
      <a
        id="code-sample-link"
        class="button button--secondary"
        href="https://developer.auth0.com/resources/code-samples/spa/angular/basic-authentication"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out the Angular code sample →
      </a>
    </div>
  `,
})
export class HeroBannerComponent {
  logo = 'https://jimetevenard.github.io/test-auth0/assets/JIM.png';
}
