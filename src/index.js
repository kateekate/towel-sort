module.exports = function towelSort(matrix) {
  if (!matrix) { return [] }
  let matrixTowelSort = []
  matrix.forEach((el, i) => {
    if (i % 2 != 0) matrixTowelSort.concat(el.reverse())
    matrixTowelSort = matrixTowelSort.concat(el)
  })

  return matrixTowelSort
}
