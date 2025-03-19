// src/components/navbar.ts

export default class Navbar {
    private navbarLinks: NodeListOf<HTMLAnchorElement>;

    constructor() {
      this.navbarLinks = document.querySelectorAll('.nav-links a');
      this.init();
    }

    private init() {
      this.navbarLinks.forEach(anchor => {
        anchor.addEventListener('click', (e) => this.handleNavigation(e));
      });
    }

    private handleNavigation(event: Event) {
      event.preventDefault();
      const targetUrl = (event.target as HTMLAnchorElement).getAttribute('href')!;

      // If the link is an internal anchor link (e.g. #home)
      if (targetUrl.startsWith('#')) {
        const targetId = targetUrl.substring(1); // Remove '#' from href
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // For external pages (like contact.html), allow normal navigation
        window.location.href = targetUrl;
      }
    }
}
