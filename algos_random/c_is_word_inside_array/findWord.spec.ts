import { describe, it, expect } from "@jest/globals";
import { findWord } from "./findWord";

describe("Find word in an array of strings. Wildcard allowed", () => {
	// const words = ["cat", "bat", "put", "dog", "elephant"];
	const words = ["cat", "cap"];

	it("should return true", async () => {
		const word = "*a*";
		expect(findWord(words, word)).toBeTruthy();
	});

	// it("should return true", async () => {
	// 	const word = "*u*";
	// 	expect(findWord(words, word)).toBeTruthy();
	// });

	// it("should return true", async () => {
	// 	const word = "***";
	// 	expect(findWord(words, word)).toBeTruthy();
	// });

	// it("should return false", async () => {
	// 	const word = "cog";
	// 	expect(findWord(words, word)).toBeFalsy();
	// });

	// it("should return false", async () => {
	// 	const word = "*t*";
	// 	expect(findWord(words, word)).toBeFalsy();
	// });

	// it("should return false", async () => {
	// 	const word = "*";
	// 	expect(findWord(words, word)).toBeFalsy();
	// });

	// it("should return false", async () => {
	// 	const word = "**";
	// 	expect(findWord(words, word)).toBeFalsy();
	// });

	// it("should return false", async () => {
	// 	const word = "e**p**nt";
	// 	expect(findWord(words, word)).toBeTruthy();
	// });

	// it("should return false", async () => {
	// 	const word = "**e**an*";
	// 	expect(findWord(words, word)).toBeTruthy();
	// });
});
