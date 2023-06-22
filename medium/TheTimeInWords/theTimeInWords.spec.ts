const theTimeInWord= require('./theTimeInWords');

describe("theTimeInWord", () => {
    it("should return the time in word of 5:47", async () => {
        expect(theTimeInWord.timeInWords(5,47))
            .toEqual('thirteen minutes to six');
    });
    it("should return the time in word of 1:1", async () => {
        expect(theTimeInWord.timeInWords(1,1))
            .toEqual('one minute past one');
    });
    it("should return the time in word of 7:15", async () => {
        expect(theTimeInWord.timeInWords(7,15))
            .toEqual('quarter past seven');
    });
});



