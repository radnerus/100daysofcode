// class Human {
// 	stamina: number;
// 	constructor(stamina: number) {
// 		this.stamina = stamina;
// 	}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
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
var Human = (function () {
    function Human(stamina) {
        this.stamina = stamina;
    }
    Human.prototype.run = function (requiredStamina) {
        return (this.stamina -= requiredStamina);
    };
    Human.prototype.rest = function (addedStamina) {
        return (this.stamina += addedStamina);
    };
    Object.defineProperty(Human.prototype, "run",
        __decorate([
            log
        ], Human.prototype, "run", Object.getOwnPropertyDescriptor(Human.prototype, "run")));
    Object.defineProperty(Human.prototype, "rest",
        __decorate([
            log
        ], Human.prototype, "rest", Object.getOwnPropertyDescriptor(Human.prototype, "rest")));
    return Human;
})();
function log(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value; // save a reference to the original method
    // NOTE: Do not use arrow syntax here. Use a function expression in
    // order to use the correct value of `this` in this method (see notes below)
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        // pre
        console.log(("Stamina before " + propertyKey + ": ") + args);
        // run and store result
        var result = originalMethod.apply(this, args);
        // post
        console.log(("Stamina after " + propertyKey + ": ") + result);
        // return the result of the original method (or modify it before returning)
        return result;
    };
    return descriptor;
}
var human = new Human(10);
human.run(1);
human.rest(12);
human.run(20);
// Stamina before run: 1
// Stamina after run: 9
// Stamina before rest: 12
// Stamina after rest: 21
// Stamina before run: 20
// Stamina after run: 1
