import { TestBed } from '@angular/core/testing';
import { ClearObservable } from './clear-observable.directive';

describe('ClearObservableDirective', () => {
  let directive: ClearObservable;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClearObservable],
    });

    directive = TestBed.inject(ClearObservable);
  });

  it('should create the directive instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should emit destroy$ and complete on ngOnDestroy', () => {
    const destroySpy = jest.spyOn(directive.destroy$, 'next');
    const completeSpy = jest.spyOn(directive.destroy$, 'complete');

    directive.ngOnDestroy();

    expect(destroySpy).toHaveBeenCalledWith(true);
    expect(completeSpy).toHaveBeenCalled();
  });
});
