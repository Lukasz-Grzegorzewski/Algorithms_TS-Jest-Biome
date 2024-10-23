import { describe, it, expect } from "@jest/globals";
import { countPrimes } from "./countPrimes";
import _ from "lodash";

describe("COUNT PRIMES: ", () => {
	it("should return 4 for n = 10", async () => {
		const n = 10;
		expect(countPrimes(n)).toBe(4);
	});

	it("should return 0 for n = 0", async () => {
		const n = 0;
		expect(countPrimes(n)).toBe(0);
	});

	it("should return 0 for n = 1", async () => {
		const n = 1;
		expect(countPrimes(n)).toBe(0);
	});
});
