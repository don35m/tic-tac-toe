function Player(mark) {
    this.mark = mark;
}

function Space(xCoordinate, yCoordinate, letter){
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    if(typeof(letter) === 'undefined'){
        this.letter = null;
    } else {
        this.letter = letter;
    }

}
