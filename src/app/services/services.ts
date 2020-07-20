import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Testimonial } from '../models/testimonials';

@Injectable({ providedIn: 'root' })
export class WebsiteServices {
  private testimonials: Testimonial[] = [];
  constructor(private _http: HttpClient) {
    console.log('Service is running and ready to be used');
  }

  GetTestimonials() {
    return new Promise((resolve) =>
      this._http
        .get('app/data/testimonials.json')
        .subscribe((data: Testimonial[]) => {
          resolve(data);
        })
    );
  }
}
