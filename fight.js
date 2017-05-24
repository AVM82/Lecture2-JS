
function fight (fighter, improvedFighter, ...point){

   printFighter("First fighter", fighter);
   printFighter("Second fighter", improvedFighter);

   while (fighter.health > 0 && improvedFighter.health > 0) {


        fighter.hit(improvedFighter, point[1]);
        improvedFighter.hit(fighter, point[1]);
    }




}

