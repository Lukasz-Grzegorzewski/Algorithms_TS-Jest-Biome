import { describe, it, expect } from "@jest/globals";
import { generate } from "./pascalTriangle";

describe("PASCAL TRIANGLE: ", () => {
	it("should return 5 rows", async () => {
		const n = 5;
		const output = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
		expect(generate(n)).toEqual(output);
	});

	it("should return 1 row", async () => {
		const n = 1;
		const output = [[1]];
		expect(generate(n)).toEqual(output);
	});
});
