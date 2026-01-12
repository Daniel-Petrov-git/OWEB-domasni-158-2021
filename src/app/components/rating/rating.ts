import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating',
  imports: [FormsModule],
  templateUrl: './rating.html',
  styleUrl: './rating.css'
})
export class Rating {
  websiteRating = 0;
  cityRating = 0;
  
  formData = {
    name: '',
    email: '',
    favorite: '',
    comments: ''
  };

  showSuccessMessage = false;

  setWebsiteRating(rating: number) {
    this.websiteRating = rating;
  }

  setCityRating(rating: number) {
    this.cityRating = rating;
  }

  onSubmit() {
    if (this.websiteRating === 0 || this.cityRating === 0) {
      alert('Please provide both ratings!');
      return;
    }

    const submissionData = {
      ...this.formData,
      websiteRating: this.websiteRating,
      cityRating: this.cityRating
    };

    // Show success message
    this.showSuccessMessage = true;

    // Reset form
    this.formData = {
      name: '',
      email: '',
      favorite: '',
      comments: ''
    };
    this.websiteRating = 0;
    this.cityRating = 0;

    // Hide success message after 5 seconds
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000);
  }
}