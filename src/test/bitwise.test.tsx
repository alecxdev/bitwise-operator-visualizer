import { describe, expect, it } from "vitest";
import { andFn, orFn, xorFn } from "../services/bitwise";

describe('Check for the bitwise operator service', () => {
    it('should check for XOR operator', () => {
        expect(xorFn(5, 5)).toBe(0);
    });

    it('should check for AND operator', () => {
        expect(andFn(5, 5)).toBe(5);
    });

    it('should check for OR operator', () => {
        expect(orFn(5, 3)).toBe(7);
    });
});