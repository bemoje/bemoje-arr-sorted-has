import arrSortedHas from '../src/arr-sorted-has'

describe('arrSortedHas', () => {
	test('len = 0', () => {
		const arr = []
		expect(arrSortedHas(arr, 'b')).toBe(false)
	})

	test('len = 1, exists', () => {
		const arr = ['b']
		expect(arrSortedHas(arr, 'b')).toBe(true)
	})

	test('len = 1, doesnt exist', () => {
		const arr = ['c']
		expect(arrSortedHas(arr, 'b')).toBe(false)
	})

	test('alpha - middle', () => {
		const arr = ['a', 'b', 'c', 'd']
		expect(arrSortedHas(arr, 'b')).toBe(true)
	})

	test('alpha - first', () => {
		const arr = ['a', 'b', 'c', 'd']
		expect(arrSortedHas(arr, 'a')).toBe(true)
	})

	test('alpha - last', () => {
		const arr = ['a', 'b', 'c', 'd']
		expect(arrSortedHas(arr, 'd')).toBe(true)
	})

	test('alpha - doesnt exist', () => {
		const arr = ['a', 'b', 'c', 'd']
		expect(arrSortedHas(arr, 'bb')).toBe(false)
	})

	test('numeric - middle', () => {
		const arr = [0, 1, 2, 3]
		expect(
			arrSortedHas(arr, 1, {
				numeric: true,
			}),
		).toBe(true)
	})

	test('numeric - first', () => {
		const arr = [0, 1, 2, 3]
		expect(
			arrSortedHas(arr, 0, {
				numeric: true,
			}),
		).toBe(true)
	})

	test('numeric - last', () => {
		const arr = [0, 1, 2, 3]
		expect(
			arrSortedHas(arr, 3, {
				numeric: true,
			}),
		).toBe(true)
	})

	test('numeric - doesnt exist', () => {
		const arr = [0, 1, 2, 3]
		expect(
			arrSortedHas(arr, 22, {
				numeric: true,
			}),
		).toBe(false)
	})

	test('pass comparator function', () => {
		const arr = [0, 1, 2, 3]
		expect(
			arrSortedHas(arr, 22, (a, b) => {
				return a - b
			}),
		).toBe(false)
	})

	test('examples', () => {
		let res

		const alpha = ['a', 'b', 'c']

		res = arrSortedHas(alpha, 'b')

		expect(res).toBe(true)

		const numeric = [2, 13, 20]

		res = arrSortedHas(numeric, 20, {
			numeric: true,
		})

		expect(res).toBe(true)

		const arrays = [
			[192, 168, 0, 0],
			[192, 168, 0, 1],
			[192, 168, 1, 0],
		]

		res = arrSortedHas(arrays, [192, 168, 0, 1], {
			numeric: true,
			arrays: true,
		})

		expect(res).toBe(true)

		res = arrSortedHas(numeric, 20, (a, b) => {
			return a - b
		})

		expect(res).toBe(true)

		const objectsByName = [
			{ name: 'bonzo', age: 9 },
			{ name: 'john', age: 7 },
		]

		res = arrSortedHas(
			objectsByName,
			{ name: 'john', age: 7 },
			{
				by: 'name',
			},
		)

		expect(res).toBe(true)

		const objectsByAge = [
			{ name: 'john', age: 7 },
			{ name: 'bonzo', age: 9 },
		]

		res = arrSortedHas(
			objectsByAge,
			{ name: 'john', age: 7 },
			{
				by: 'age',
			},
		)

		expect(res).toBe(true)

		const valuesByAge = [
			['john', 7],
			['bonzo', 9],
		]

		res = arrSortedHas(valuesByAge, ['bonzo', 9], {
			by: 1,
		})

		expect(res).toBe(true)

		const valuesByFirstInt = [
			['john', 'johnson', 7],
			['tracy', 'chapman', 9],
		]

		const elem = ['tracy', 'chapman', 9]

		res = arrSortedHas(valuesByFirstInt, elem, {
			by: (arrElem) => {
				for (let val of arrElem) {
					if (Number.isInteger(val)) {
						return val
					}
				}
			},
		})

		expect(res).toBe(true)
	})
})
