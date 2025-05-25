import { WordEndingPipe } from './word-ending.pipe';

describe('WordEndingPipe', () => {
  const pipe = new WordEndingPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Single form shouldnt be changed', () => {
    const pipe = new WordEndingPipe();
    const str = 'test';
    expect(pipe.transform(str, 1)).toContain(str);
  });

  it('Multiple form should add "s" ending', () => {
    const pipe = new WordEndingPipe();
    const str = 'test';
    expect(pipe.transform(str, 2)).toContain(str + 's');
  });
});
