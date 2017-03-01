import { Component } from '@angular/core';

@Component({
    selector: 'app-email',
    template: `
        <form action="#">
            <div class="c-form-wrap">
                <div class="c-form-wrap-group">
                    <input type="text" placeholder="Your Name" class="form-control">
                    <input type="text" placeholder="Subject" class="form-control"> </div>
                <div class="c-form-wrap-group">
                    <input type="text" placeholder="Your Email" class="form-control">
                    <input type="text" placeholder="Contact Phone" class="form-control"> </div>
            </div>
            <textarea rows="8" name="message" placeholder="Write comment here ..." class="form-control"></textarea>
            <button type="submit" class="btn c-btn-dark c-btn-uppercase btn-lg c-btn-sbold btn-block c-btn-square">Send it</button>
        </form>
    `,
    styles: [``]
})
export class EmailComponent {
    
}
