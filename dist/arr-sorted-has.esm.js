import arrSortedIndexOf from '@bemoje/arr-sorted-index-of';

/**
 * Binary search  -based indexOf for sorted arrays.
 * @param {Array} arr - The array to search
 * @param {*} element - The element to find
 * @param {function|object} [compare]
 * @param {boolean} [compare.numeric=false] - Sort numerically. Defaults to lexicographic/alphabetic sort.
 * @param {boolean} [compare.descending=false] - Sort in descending order. Defaults to ascending order.
 * @param {boolean} [compare.array=false] - Sort arrays. Nested arrays are also compared recursively.
 * @param {number|string|getter} [compare.by=undefined] - Sort by either array index, a callback(element): any - or by object keys with dot-notation support.
 * @returns {boolean}
 */
function arrSortedHas(arr, element, compare) {
	return arrSortedIndexOf(arr, element, compare) !== -1
}

/**
 * Callback type definition.
 * @callback getter
 * @param {*} a - The value
 * @returns {*} The value to be compared
 */

export default arrSortedHas;
