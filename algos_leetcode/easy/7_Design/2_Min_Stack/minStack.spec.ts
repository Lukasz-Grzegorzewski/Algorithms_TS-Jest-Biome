import { describe, it, expect } from "@jest/globals";
import { MinStack } from "./minStack";
import _ from "lodash";

describe("MIN STACK: ", () => {
	it("should function properly for the methodes push, pop, top, getMin", async () => {
		const minStack = new MinStack();
		minStack.push(-2);
		minStack.push(0);
		minStack.push(-3);
		expect(minStack.getMin()).toBe(-3);
		expect(minStack.top()).toBe(-3);
		
		minStack.pop();
		expect(minStack.top()).toBe(0);
		expect(minStack.getMin()).toBe(-2);
	});
});
