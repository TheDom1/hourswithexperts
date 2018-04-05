function MultiplicatorUnitFailure() { }

function primitiveMultiply(a, b) {
	if (Math.random() < 0.5) {
		return a * b;
	} else {
		throw new MultiplicatorUnitFailure();
	}
}

function reliableMultiply(a, b) {
	// https://stackoverflow.com/questions/4894120/what-does-for-mean
	for (; ;) {
		try {
			return primitiveMultiply(a, b);
		} catch (e) {
			if (!(e instanceof MultiplicatorUnitFailure))
				throw e;
		}
	}
}
reliableMultiply(3,2);
