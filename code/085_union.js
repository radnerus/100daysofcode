var pet = getSmallPet();
pet.layEggs();
// Only available in one of the two possible types
pet.swim();
// Property 'swim' does not exist on type 'Bird | Fish'.
// Property 'swim' does not exist on type 'Bird'.
