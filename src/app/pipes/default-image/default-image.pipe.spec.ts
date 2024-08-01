import { DefaultImagePipe } from './default-image.pipe';

describe('DefaultImagePipe', () => {
  let pipe: DefaultImagePipe;

  beforeEach(() => {
    pipe = new DefaultImagePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the value if it is provided', () => {
    const imageUrl = 'http://example.com/image.jpg';
    const fallback = 'http://example.com/default.jpg';
    expect(pipe.transform(imageUrl, fallback)).toBe(imageUrl);
  });

  it('should return the fallback if the value is empty', () => {
    const fallback = 'http://example.com/default.jpg';
    expect(pipe.transform('', fallback)).toBe(fallback);
  });
});
