import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the value if it is provided', () => {
    const string = 'Hello World!';
    const limit = 8;
    expect(pipe.transform(string, limit)).toBe('Hello...');
  });
});
