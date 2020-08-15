// class Human {
// 	stamina: number;
// 	constructor(stamina: number) {
// 		this.stamina = stamina;
// 	}

// 	run(requiredStamina: number): number {
// 		return (this.stamina -= requiredStamina);
// 	}

// 	rest(addedStamina: number): number {
// 		return (this.stamina += addedStamina);
// 	}
// }

// const human = new Human(10);
// console.log(`Stamina before run: ` + human.stamina);
// human.run(1);
// console.log(`Stamina after run: ` + human.stamina);
// console.log(`Stamina before rest: ` + human.stamina);
// human.rest(12);
// console.log(`Stamina after rest: ` + human.stamina);
// console.log(`Stamina before run: ` + human.stamina);
// human.run(20);
// console.log(`Stamina after run: ` + human.stamina);

// Stamina before run: 10
// Stamina after run: 9
// Stamina before rest: 9
// Stamina after rest: 21
// Stamina before run: 21
// Stamina after run: 1

class Human {
	stamina: number;
	constructor(stamina: number) {
		this.stamina = stamina;
	}

	@log
	run(requiredStamina: number): number {
		return (this.stamina -= requiredStamina);
	}

	@log
	rest(addedStamina: number): number {
		return (this.stamina += addedStamina);
	}
}
function log(
	target: Object,
	propertyKey: string,
	descriptor: TypedPropertyDescriptor<any>
) {
	const originalMethod = descriptor.value; // save a reference to the original method

	// NOTE: Do not use arrow syntax here. Use a function expression in
	// order to use the correct value of `this` in this method (see notes below)
	descriptor.value = function (...args: any[]) {
		// pre
		console.log(`Stamina before ${propertyKey}: ` + args);
		// run and store result
		const result = originalMethod.apply(this, args);
		// post
		console.log(`Stamina after ${propertyKey}: ` + result);
		// return the result of the original method (or modify it before returning)
		return result;
	};

	return descriptor;
}

const human = new Human(10);
human.run(1);
human.rest(12);
human.run(20);

// Stamina before run: 1
// Stamina after run: 9
// Stamina before rest: 12
// Stamina after rest: 21
// Stamina before run: 20
// Stamina after run: 1
