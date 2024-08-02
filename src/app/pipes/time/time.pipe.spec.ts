import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  let pipe: TimePipe;

  beforeEach(() => {
    pipe = new TimePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the value if it is provided', () => {
    const time = 73;
    expect(pipe.transform(time)).toBe('1h 13min');
  });
});
