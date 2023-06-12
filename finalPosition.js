const finalPosition = function (moves) {
    // Your code in here ...
    let position = [0, 0];
    for (let move of moves) {
        switch (move) {
            case 'north':
                position[1]++;
                break;
            case 'south':
                position[1]--;
                break;
            case 'west':
                position[0]--;
                break;
            case 'east':
                position[0]++;
                break;

            default:
                break;
        }
    }
    return position;
}