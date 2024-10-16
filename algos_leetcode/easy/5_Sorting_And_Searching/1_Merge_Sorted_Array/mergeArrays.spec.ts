import { describe, it, expect } from "@jest/globals";
import { mergeArrays } from "./mergeArrays";

describe("MERGE ARRAYS =", () => {
	it("should merge 2 arrays(4 + 5 places) and store result in the first array", async () => {
		const nums1 = [-1,0,1,1,0,0,0,0,0]
		const m = 4;
		const nums2 = [-1,0,2,2,3]
		const n = 5;

		mergeArrays(nums1, m, nums2, n);
		expect(nums1).toEqual([-1,-1,0,0,1,1,2,2,3]);
	});

	it("should merge 2 arrays(3 + 3 places) and store result in the first array", async () => {
		const nums1 = [4, 5, 6, 0, 0, 0];
		const m = 3;
		const nums2 = [1, 2, 3];
		const n = 3;

		mergeArrays(nums1, m, nums2, n);
		expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it("should merge 2 arrays(3 + 3 places) and store result in the first array", async () => {
		const nums1 = [1, 2, 3, 0, 0, 0];
		const m = 3;
		const nums2 = [2, 5, 6];
		const n = 3;

		mergeArrays(nums1, m, nums2, n);
		expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
	});

	it("should merge 2 arrays(5 + 1 places) and store result in the first array", async () => {
		const nums1 = [1, 2, 4, 5, 6, 0];
		const m = 5;
		const nums2 = [3];
		const n = 1;

		mergeArrays(nums1, m, nums2, n);
		expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it("should merge 2 arrays(1 + 0 places) and store result in the first array", async () => {
		const nums1 = [1];
		const m = 1;
		const nums2: number[] = [];
		const n = 0;

		mergeArrays(nums1, m, nums2, n);
		expect(nums1).toEqual([1]);
	});

	it("should merge 2 arrays(0 + 1 places) and store result in the first array", async () => {
		const nums1 = [0];
		const m = 0;
		const nums2 = [1];
		const n = 1;

		mergeArrays(nums1, m, nums2, n);
		expect(nums1).toEqual([1]);
	});

	it("should merge 2 arrays(1 + 1 places) and store result in the first array", async () => {
		const nums1 = [2, 0];
		const m = 1;
		const nums2 = [1];
		const n = 1;

		mergeArrays(nums1, m, nums2, n);
		expect(nums1).toEqual([1, 2]);
	});

	it("", async () => {
		const nums1 =  [-50,-49,-49,-48,-47,-45,-43,-41,-41,-41,-40,-40,-39,-39,-38,-37,-37,-36,-36,-35,-35,-33,-33,-32,-31,-31,-30,-30,-29,-28,-25,-24,-21,-19,-18,-18,-14,-13,-10,-10,-9,-9,-9,-6,-6,-5,-1,1,7,10,10,11,13,14,14,15,20,21,21,22,23,25,26,27,30,30,31,32,33,35,36,38,40,40,41,41,42,44,46,46,46,46,46,47,48,0]
		;
		const m = 85;
		const nums2 = [33];
		const n = 1;

		mergeArrays(nums1, m, nums2, n);
		expect(nums1).toEqual([-50,-49,-49,-48,-47,-45,-43,-41,-41,-41,-40,-40,-39,-39,-38,-37,-37,-36,-36,-35,-35,-33,-33,-32,-31,-31,-30,-30,-29,-28,-25,-24,-21,-19,-18,-18,-14,-13,-10,-10,-9,-9,-9,-6,-6,-5,-1,1,7,10,10,11,13,14,14,15,20,21,21,22,23,25,26,27,30,30,31,32,33,33,35,36,38,40,40,41,41,42,44,46,46,46,46,46,47,48]);
	});
});
