import { cacheTestingModule } from 'ng-cache-testing-module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AuthenticationAdminComponent } from './authentication-admin.component';

describe('AuthenticationAdminComponent', () => {
  cacheTestingModule();
  let component: AuthenticationAdminComponent;
  let fixture: ComponentFixture<AuthenticationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('testing component', () => {
  //   expect(component.Name).toBe("admin-auth")
  // })
});
