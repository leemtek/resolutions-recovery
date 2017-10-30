import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";

// rxjs
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"; // used for .map

@Injectable()
export class EmailService {
    private strPostUrl: string = "https://us-central1-leemtek-secure-forms.cloudfunctions.net/resolutionsrecovery/send";
    // private strPostUrl: string = "http://localhost:5000/leemtek-secure-forms/us-central1/resolutionsrecovery/send";
    
    // Details of my visitor.
    objSenderInfo = {
        strName: null,
        strEmail: null,
        strPhone: null,
        strSubject: null,
        strComment: null,
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