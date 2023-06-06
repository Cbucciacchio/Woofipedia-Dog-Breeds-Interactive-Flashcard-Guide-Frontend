import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          MatIconModule,
          NgModule,
          BrowserModule,
          AppRoutingModule,
          MatSlideToggleModule,
          MatCardModule,
          MatButtonModule,
          HttpClientModule,
          BrowserAnimationsModule
        ],
        declarations: [AppComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  it('should have an initial currentGrowthIndex of 0', () => {
    expect(component.currentGrowthIndex).toBe(0);
  });

  it('should have an initial showGrowth value of false', () => {
    expect(component.showGrowth).toBeFalse();
  });

  it('should fetch breed data and populate breedData array', () => {
    expect(component.breedData.length).toBeGreaterThan(0);
  });

  it('should have an initial currentBreedIndex of 0', () => {
    expect(component.currentBreedIndex).toBe(0);
  });

  it('should have a growthImageDuration of 2500', () => {
    expect(component.growthImageDuration).toBe(2500);
  });
});
