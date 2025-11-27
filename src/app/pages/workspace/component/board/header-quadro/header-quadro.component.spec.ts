import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderQuadroComponent } from './header-quadro.component';

describe('HeaderQuadroComponent', () => {
  let component: HeaderQuadroComponent;
  let fixture: ComponentFixture<HeaderQuadroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderQuadroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderQuadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
