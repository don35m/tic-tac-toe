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

    it("let's a player mark a space", function() {
        var testPlayer = new Player("X");
        var testSpace = new Space(1,2);
        testSpace.markBy(testPlayer);
        expect(testSpace.letter).to.equal("X");
    });
});
