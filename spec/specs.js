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

describe('Board', function() {
    it("creates 9 spaces when it's initialized", function() {
        var testBoard = new Board(9);
        var spaceArray = [];
        for(var i = 1; i < 4; i++){
            for(var j = 1; j < 4; j++){
                var testSpace = new Space(i,j);
                spaceArray.push(testSpace);
            }
        }

        expect(testBoard.spaces).to.eql(spaceArray);
    });

    it("can find a space based on the coordinates entered", function() {
        var testBoard = new Board(9);
        var spaceArray = [];
        for(var i = 1; i < 4; i++){
            for(var j = 1; j < 4; j++){
                var space = new Space(i,j);
                spaceArray.push(testSpace);
            }
        }
        var testSpace = new Space(1,2);

        expect(testBoard.find(1,2)).to.eql(testSpace);
    });
});
