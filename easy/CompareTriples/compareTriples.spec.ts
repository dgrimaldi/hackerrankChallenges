const compareTriples= require('./compareTriples');

describe("compareTriples", () => {
    it("should compare two triples", async () => {
        expect(compareTriples.compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1,1]);
    });
});
