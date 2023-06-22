const climbingLeaderboard = require('./climbingLeadboard');

describe("climbingLeaderboard", () => {
    it("should show the ranks for 4 differnt points", async () => {
        expect(climbingLeaderboard.climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])).toEqual([6, 4, 2, 1]);
    });
});
