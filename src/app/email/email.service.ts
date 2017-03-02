import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";

// rxjs
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"; // used for .map

@Injectable()
export class EmailService {
    private strPostUrl: string = "https://leemtek.com/forms/resolutionsrecovery/contact";
    
    // Details of my visitor.
    objSenderInfo = {
        strName: "Duane Leem",
        strEmail: "Duane@LeemTek.com",
        strPhone: "925-526-5229",
        strSubject: "Test email.",
        strComment: "Just a test email.  Please ignore.",
        googleResponse: null
    }; // objSenderInfo
    
    constructor(private http: Http) {}
    
    // Send the email to REST API.
    mdSendData(objFinalSenderInfo: any) {
        const strBody = JSON.stringify(objFinalSenderInfo);
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post(this.strPostUrl, strBody, { headers: headers })
            .map((data: Response) => data.json())
        ; // this.http.post()
    }
}