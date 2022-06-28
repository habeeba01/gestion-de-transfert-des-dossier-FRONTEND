import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDossierByIdComponent } from './list-dossier-by-id.component';

describe('ListDossierByIdComponent', () => {
  let component: ListDossierByIdComponent;
  let fixture: ComponentFixture<ListDossierByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDossierByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDossierByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
