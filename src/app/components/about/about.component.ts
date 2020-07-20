import { Component, OnInit } from '@angular/core';
import { WebsiteServices } from '../../services/services';
import { Testimonial } from '../../models/testimonials';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public _testimonials: Testimonial[] = [];

  constructor(private services: WebsiteServices) {}

  ngOnInit(): void {
    this.services.GetTestimonials().then((testimonials: Testimonial[]) => {
      this._testimonials = testimonials;
    });
  }
}
