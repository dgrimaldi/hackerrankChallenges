const aVeryBigSum= require('./aVeryBigSum');

describe("aVeryBigSum", () => {
    it("should calculate the sum of a series of big numbers", async () => {
        expect(aVeryBigSum.aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005])).toEqual(5000000015);
    });
});



