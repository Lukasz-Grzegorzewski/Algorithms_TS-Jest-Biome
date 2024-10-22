import { describe, it, expect } from "@jest/globals";
import { fizzBuzz } from "./fizzBuzz";
import _ from "lodash";

describe("FIZZ BUZZ: ", () => {
	it("should return correct array with length = 3", async () => {
		const n = 3;
		expect(fizzBuzz(n)).toEqual(["1", "2", "Fizz"]);
	});

	it("should return correct array with length = 5", async () => {
		const n = 5;
		expect(fizzBuzz(n)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
	});

	it("should return correct array with length = 15", async () => {
		const n = 15;
		expect(fizzBuzz(n)).toEqual([
			"1",
			"2",
			"Fizz",
			"4",
			"Buzz",
			"Fizz",
			"7",
			"8",
			"Fizz",
			"Buzz",
			"11",
			"Fizz",
			"13",
			"14",
			"FizzBuzz",
		]);
	});
});
