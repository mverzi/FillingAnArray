/**
 * This function produces an array with the numbers 0 to N-1 in it.
 * @param {*} N The number of elements in the created array
 * @returns A new array with numbers 0 to N-1
 */
const arr = N => {
    return N >= 0 ? [...Array(N).keys()] : []
    }