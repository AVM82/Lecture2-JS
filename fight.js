
function fight (fighter, improvedFighter, ...point){

    printFighter("First fighter", fighter);
    printFighter("Second fighter", improvedFighter);
    let queue = 2;
    while (fighter.health > 0 && improvedFighter.health > 0) {
        if (queue++ % 2 == 0) {
            fighter.hit(improvedFighter, point[generateValue(1,point.length)-1]);
        } else {

            if (generateValue() > 90){
                console.log("DOUBLE HIT!!!");
                improvedFighter.doubleHit(fighter, point[generateValue(1,point.length)-1]);
            } else {

                improvedFighter.hit(fighter, point[generateValue(1,point.length)-1]);
            }
        }
    }
    let nameOfWinner = () => {
        if (improvedFighter.health > 0) {
            return improvedFighter.name;
        } else {
            return fighter.name;
        }
    }
    console.log(`GAME OVER.${nameOfWinner()} WIN!`);
}

