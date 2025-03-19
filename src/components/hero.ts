export default class Hero {
    private contactButton: HTMLButtonElement | null;
    private aboutMeButton: HTMLAnchorElement | null;

    constructor() {
        // Find the buttons
        this.contactButton = document.querySelector('.btn-contact');
        this.aboutMeButton = document.querySelector('.btn-link');
        this.init();
    }

    private init() {
        // Ensure buttons exist before attaching event listeners
        if (this.contactButton) {
            this.contactButton.addEventListener('click', this.handleContactClick);
        }

        if (this.aboutMeButton) {
            this.aboutMeButton.addEventListener('click', this.handleAboutMeClick);
        }
    }

    private handleContactClick() {
        // Redirect to the contact email (still using a reload here)
        window.location.href = 'mailto:novaz@domain.com'; // Replace with actual email address
    }

    private handleAboutMeClick(event: MouseEvent) {
        // Prevent default link behavior (if it's a link)
        event.preventDefault();

        // Instead of reloading the page, use location.assign or history.pushState for smoother navigation
        // Option 1: Full reload (unchanged)
        // window.location.href = 'about.html';

        // Option 2: Using history.pushState to avoid a full reload (SPA-like behavior)
        window.history.pushState({}, '', 'about.html'); // Change the URL to 'about.html' without reloading

        // If you want to load the about page content dynamically (without a full reload), you would need 
        // to load the content using AJAX or other methods.
    }
}
