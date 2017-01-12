import {Component} from '@angular/core';

import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';


@Component({

    selector: 'about',
    template: require('./about.component.html'),
    
    
})

export class AboutComponent {

/* onMouseOver(): void {

 	 console.log("Mouseover called");
 	  let dialog = this.modal.open(
                <any>component,
                bindings,
                new ModalConfig("lg", false, 27));


     
  }*/

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  onMouseOver() {
    this.modal.alert()
        .size('sm')
        .showClose(true)
        .title('A simple Alert dialog window')
        .body(`
            <h4> This is the sample dialog that is been showed here.</h4>
            <b>Shows Successfull:</b>
            <ul>
                <li>On Mouse over it opens a alert dialog</li>
                <li> Click <b>OK </b>to close this dialog</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                 
            </ul>`)
        .open();
  }

  onMouseOut(): void {
     
  }

  
}
