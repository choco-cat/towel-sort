module.exports = function towelSort(matrix) {
    let result = [];
    if (Array.isArray(matrix)) {
        matrix.forEach((row, row_index) => {
            row = (row_index % 2 === 1) ? row.reverse() : row;
            row.forEach((element, index) => {
                result.push(element);
            });
        });
    }
    return result;
}
