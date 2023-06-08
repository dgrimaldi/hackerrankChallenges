const diagonalDifference= require('./diagonalDifference');

describe("diagonalDifference", () => {
    it("should calculate the absolute difference between diagonals of a matrix", async () => {
        expect(diagonalDifference.diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]])).toEqual(2);
    });
});



