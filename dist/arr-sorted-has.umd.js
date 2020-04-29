(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/arr-sorted-index-of')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/arr-sorted-index-of'], factory) :
	(global = global || self, global['arr-sorted-has'] = factory(global.arrSortedIndexOf));
}(this, (function (arrSortedIndexOf) { 'use strict';

	arrSortedIndexOf = arrSortedIndexOf && Object.prototype.hasOwnProperty.call(arrSortedIndexOf, 'default') ? arrSortedIndexOf['default'] : arrSortedIndexOf;

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

	return arrSortedHas;

})));
