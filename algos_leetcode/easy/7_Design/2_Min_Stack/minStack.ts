export class MinStack {
	stack: number[] = [];
	minVals: number[] = [];

	push(val: number): void {
		if (this.minVals.length > 0) {
			if (val < this.minVals[this.minVals.length - 1])
				this.minVals[this.minVals.length] = val;
			else
				this.minVals[this.minVals.length] =
					this.minVals[this.minVals.length - 1];
		} else this.minVals[0] = val;
		this.stack[this.stack.length] = val;
	}

	pop(): void {
		if (this.stack.length > 0) this.stack.length = this.stack.length - 1;
		if (this.minVals.length > 0) this.minVals.length = this.minVals.length - 1;
	}

	top(): number {
		return this.stack[this.stack.length - 1];
	}

	getMin(): number {
		return this.minVals[this.minVals.length - 1];
	}
}
