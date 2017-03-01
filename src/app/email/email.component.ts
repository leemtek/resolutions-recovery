import { Component } from '@angular/core';

import { EmailService } from "./email.service";

@Component({
    selector: 'app-email',
    template: `
        <form #contactForm="ngForm">
            <div class="c-form-wrap">
                <div class="c-form-wrap-group">
                    <input type="text" placeholder="Your Name" class="form-control" 
                        name="name" required
                        [(ngModel)]="objUserDetails.strName"
                    />
                    <input type="text" placeholder="Subject" class="form-control"
                        name="subject"
                        [(ngModel)]="objUserDetails.strSubject"
                    />
                </div>
                <div class="c-form-wrap-group">
                    <input type="text" placeholder="Your Email" class="form-control"
                        name="email" required
                        [(ngModel)]="objUserDetails.strEmail"
                    />
                    <input type="text" placeholder="Contact Phone" class="form-control"
                        name="phone" required
                        [(ngModel)]="objUserDetails.strPhone"
                    />
                </div>
            </div>
            <textarea rows="8" placeholder="Write comment here ..." class="form-control"
                name="comment"
                [(ngModel)]="objUserDetails.strComment"
            ></textarea>
            <button type="submit" class="btn c-btn-dark c-btn-uppercase btn-lg c-btn-sbold btn-block c-btn-square">Send it</button>
        </form>
    `,
    styles: [``],
    providers: [EmailService]
})
export class EmailComponent {
    private objUserDetails;
    
    constructor(private emailService: EmailService) {
        this.objUserDetails = this.emailService.objSenderInfo;
    } // constructor
}
