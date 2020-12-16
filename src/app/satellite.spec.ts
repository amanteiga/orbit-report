import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite("alicia", "orbit1", "type1", "11/23/20", false)).toBeTruthy();
  });
});
