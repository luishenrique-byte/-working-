import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFiltroComponent } from './sidebar-filtro.component';

describe('SidebarFiltroComponent', () => {
  let component: SidebarFiltroComponent;
  let fixture: ComponentFixture<SidebarFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarFiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
