import { Component } from '@angular/core';

// Service: Send-Email
import { EmailService } from "./email.service";

// Enables jQuery
declare var $:any;

@Component({
    selector: 'app-email',
    template: `
        <form #contactForm="ngForm" (ngSubmit)="mdSend()">
            <div class="c-form-wrap">
                <div class="c-form-wrap-group">
                    <input type="text" placeholder="Your Name" class="form-control space-bottom-10" 
                        name="name" required
                        [(ngModel)]="objUserDetails.strName"
                    />
                    <input type="text" placeholder="Subject" class="form-control space-bottom-10"
                        name="subject"
                        [(ngModel)]="objUserDetails.strSubject"
                    />
                </div>
                <div class="c-form-wrap-group">
                    <input type="text" placeholder="Your Email" class="form-control space-bottom-10"
                        name="email" required
                        [(ngModel)]="objUserDetails.strEmail"
                    />
                    <input type="text" placeholder="Contact Phone" class="form-control space-bottom-10"
                        name="phone" required
                        [(ngModel)]="objUserDetails.strPhone"
                    />
                </div>
            </div>

            <textarea rows="8" placeholder="Write comment here ..." class="form-control"
                name="comment"
                [(ngModel)]="objUserDetails.strComment"
            ></textarea>

            <div class="space-top-20 space-bottom-20">
                <re-captcha 
                    (captchaResponse)="mdCaptchaHandle($event)" 
                    (captchaExpired)="mdCaptchaExpired()"
                    site_key="6LeZRBcUAAAAAMhXzffhWImOhDRAz8TfMSCEsgHf"
                ></re-captcha>
            </div>

            <button id="contactBtnSubmit" type="submit" class="btn c-btn-dark c-btn-uppercase btn-lg c-btn-sbold btn-block c-btn-square"
                [disabled]="contactForm.invalid || this.objUserDetails.googleResponse == null"
            >Send it</button>
        </form>
    `,
    styles: [``],
    providers: [EmailService]
})
export class EmailComponent {
    objUserDetails;
    
    constructor(private emailService: EmailService) {
        this.objUserDetails = this.emailService.objSenderInfo;
    } // constructor

    mdSend() {
        // Disable submit button and indicate "Please wait...".
        $('#contactBtnSubmit').text('Please Wait...');
        $('#contactBtnSubmit').removeClass('btn-default').addClass('btn-info');
        $("#contactBtnSubmit").prop('disabled', true);

        // Attempt to send email.
        this.emailService.mdSendData(this.objUserDetails)
            .subscribe(data => {
                if (data.status === "email sent") {
                    // Success
                    $('#contactBtnSubmit').text('Email Sent.  Thanks! :)');
                    $('#contactBtnSubmit').removeClass('btn-info').addClass('btn-success');
                    $("#contactBtnSubmit").prop('disabled', true);
                } else {
                    // Something went wrong.
                    $('#contactBtnSubmit').text('Please try again.');
                    $('#contactBtnSubmit').removeClass('btn-info').addClass('btn-danger');
                    $("#contactBtnSubmit").prop('disabled', false);
                } // else
            }) // subscribe()
        ; // sendEmailService.mdSendData()
    } // mdSend()

    // Handle the captcha response and save to objUserDetails.captchaResponse
    mdCaptchaHandle(strResponse: string): void {
        this.objUserDetails.googleResponse = strResponse;
    } // mdCaptchaHandle(response)

    // Handles expired captchas.
    mdCaptchaExpired(): void {
        this.objUserDetails.googleResponse = null;
    }
} // EmailComponent
