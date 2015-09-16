describe('Player', function() {
    it("returns the player's mark", function() {
        var testPlayer = new Player("X");
        expect(testPlayer.mark).to.equal("X");
    });
});

describe('Space', function() {
    it("returns a player's space", function() {
        var testSpace = new Space(1,2);
        expect(testSpace.xCoordinate).to.equal(1);
    });
});
