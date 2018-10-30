import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {

  handleError(error: Error) {
    console.warn('Handler caught an error', error);
    alert(error);
  }
}
