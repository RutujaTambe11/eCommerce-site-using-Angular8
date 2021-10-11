import { cacheTestingModule } from 'ng-cache-testing-module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  cacheTestingModule();
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('testing tag'), () => {
    const data=fixture.nativeElement;
    expect(data.querySelector(".nav-link").textContent).toContain("User Login");
  }
  it('testing tag'), () => {
    const data=fixture.nativeElement;
    expect(data.querySelector(".nav-link").textContent).toContain("Admin Login");
  }
  it('testing tag'), () => {
    const data=fixture.nativeElement;
    expect(data.querySelector(".nav-link").textContent).toContain("Product List");
  }
  it('testing tag'), () => {
    const data=fixture.nativeElement;
    expect(data.querySelector(".nav-link").textContent).toContain("Add Product");
  }
});
