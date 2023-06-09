const compareTriples= require('./compareTriples');

describe("compareTriples", () => {
    it("should compare two triples", async () => {
        expect(compareTriples.compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1,1]);
    });
    it("should throw an error related to parameters", async () => {
        expect(() => {
            compareTriples.compareTriplets([5, 6], [3, 6, 10])
        }).toThrow('Parameters are not a allowed!');
    });
});
