generateValue = (from , to) => Math.floor((Math.random() * to) + from);
generateFighterParam = () => [generateValue(1, 10), generateValue(300, 700)];
function printFighter(message, fighter) {
        document.write(`${message}:<br\>`);
        for (key in fighter) {
            console.log(`${key}:${fighter[key]}`);
            document.write(`<span style="margin-left:2em">${key}:${fighter[key]}</span><br\>`);
        }
	}
generatePoint = () => {
    let countPoint = generateValue(1, 10);
    let pointArray = [];
    for (i = 0; i < countPoint; i++) {
        pointArray.push(generateValue(1, 50));
    }
    return pointArray;
}