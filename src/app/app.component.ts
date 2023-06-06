import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  breedData: any[] = []; // Array to store breed data
  currentBreedIndex: number = 0; // Index of the current breed being displayed
  showGrowth: boolean = false; // Flag to determine if growth stages are shown
  currentGrowthIndex: number = 0; // Index of the current growth stage being displayed

  growthImageCount: number = 3; // Number of growth images per breed
  growthImageDuration: number = 2500; // Duration to display each growth image

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch breed data from the API
    this.http.get<any[]>('http://localhost:3000/breed').subscribe((data) => {
      this.breedData = data;

      // Start a timer to automatically switch growth images
      setInterval(() => {
        if (this.showGrowth) {
          this.nextGrowthImage();
        }
      }, this.growthImageDuration);
    });
  }

  // Get the current breed based on the currentBreedIndex
  get currentBreed() {
    return this.breedData[this.currentBreedIndex];
  }

  // Function to swipe to the previous breed
  swipeLeft() {
    if (this.currentBreedIndex > 0) {
      this.currentBreedIndex--;
    }
  }

  // Function to swipe to the next breed
  swipeRight() {
    if (this.currentBreedIndex < this.breedData.length - 1) {
      this.currentBreedIndex++;
    }
  }

  // Function to toggle the display of growth stages
  toggleGrowth(): void {
    if (this.showGrowth) {
      this.currentGrowthIndex = -1; // Set to -1 to indicate slideshow is closing

      // Delay hiding the growth stages after the current image
      if (this.currentGrowthIndex !== -1) {
        setTimeout(() => {
          this.showGrowth = false;
        }, this.growthImageDuration);
      } else {
        this.showGrowth = false;
      }
    } else {
      this.showGrowth = true;
      this.currentGrowthIndex = 0; // Reset the growth index
    }
  }

  // Function to switch to the next growth image
  nextGrowthImage(): void {
    if (this.currentGrowthIndex < this.currentBreed.growthImages.length - 1) {
      this.currentGrowthIndex++;
    } else {
      this.toggleGrowth(); // Stop the slideshow when it reaches the end
    }
  }
}
