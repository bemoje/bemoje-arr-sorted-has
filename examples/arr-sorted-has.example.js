import arrSortedHas from '../src/arr-sorted-has'

const alpha = ['a', 'b', 'c']

arrSortedHas(alpha, 'b')
//=> true

arrSortedHas(alpha, 'e')
//=> false

const numeric = [2, 13, 20]

arrSortedHas(numeric, 20, {
	numeric: true,
})
//=> true
