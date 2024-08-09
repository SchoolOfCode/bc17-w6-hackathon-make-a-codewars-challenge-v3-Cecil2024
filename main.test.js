import { updateLight } from "./main.js";
import { describe, expect, test } from 'vitest';

//Group of tests
describe('updateLight function', () => {
  
  //Test for green
  test('should return "yellow" when the current light is "green"', () => {
    const result = updateLight('green');
    expect(result).toBe('yellow');
  });
  //Test for yellow
  test('should return "red" when the current light is "yellow"', () => {
    const result = updateLight('yellow');
    expect(result).toBe('red');
  });
  //Test for red
  test('should return "green" when the current light is "red"', () => {
    const result = updateLight('red');
    expect(result).toBe('green');
  });
  //Test for other colour
  test('should return "green" for any input other than "green", "yellow", or "red"', () => {
    const result = updateLight('blue');
    expect(result).toBe('green');
  });

});