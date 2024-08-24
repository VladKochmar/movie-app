import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { DropdownModule } from 'primeng/dropdown';
import { ActivatedRoute } from '@angular/router';
import {
  selectGenre,
  selectGenres,
  selectSortType,
} from '../../store/selectors';
import { SortType } from '../../models/sort-type.model';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;
  let store: Store;
  let mockStore: any;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockStore = {
      select: jest.fn(),
      dispatch: jest.fn(),
    };

    mockActivatedRoute = {
      paramMap: of({ get: (key: string) => 'popular' }), // Mocking route params
    };

    await TestBed.configureTestingModule({
      imports: [FiltersComponent, DropdownModule],
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create the FiltersComponent', () => {
    expect(component).toBeTruthy();
  });
});
