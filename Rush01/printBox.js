function printBox(width, height) {
    for (var row = 0; row < height; row++) {
        var line = '';
        for (var col = 0; col < width; col++) {
            if (row === 0 ||  row === height - 1 || col === 0 || col === width - 1) {
                line += '*';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}

printBox(5, 3);
module.exports = printBox;