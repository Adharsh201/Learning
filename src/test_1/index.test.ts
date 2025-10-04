import {describe, it, expect} from '@jest/globals';
import { sum, multiply } from '../index';

describe('sum function', () => {
    it('should return the sum of two numbers', () =>{
        const result = sum(2, 3);
        expect (result).toBe(5);
    })

    it('should retun the sum of two negative numbers correctly', () =>{
        const result = sum(-2, -3);
        expect (result).toBe(-5);
    })
})

describe('multiply function', () => {

    it('should return the multiply of two numbers', () =>{
        const result = multiply(2, 3);
        expect (result).toBe(6);
    })

     it('should retun the multiply of two negative numbers correctly', () =>{
        const result = multiply(-2, -3);
        expect (result).toBe(6);
    })
})
    