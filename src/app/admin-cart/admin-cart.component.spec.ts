import { cacheTestingModule } from 'ng-cache-testing-module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCartComponent } from './admin-cart.component';

describe('AdminCartComponent', () => {
  cacheTestingModule();
  let component: AdminCartComponent;
  let fixture: ComponentFixture<AdminCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('testing component', () => {
  //   expect(component.qty).toBe(1);
  // })

  
});
