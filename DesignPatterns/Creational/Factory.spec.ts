interface Pet {
    petSound: () => string;
}

class Dog implements Pet {
    petSound() {
        return "Bow Bow";
    }
}

class Cat implements Pet {
    petSound() {
        return "Meow meow";
    }
}

enum PetType {
    Cat,
    Dog,
}

function petFactory(type: PetType): Pet | undefined {
    if (type === PetType.Cat) {
        return new Cat();
    }

    if (type === PetType.Dog) {
        return new Dog();
    }
}

describe(`
    Factory method is just a fancy name for a method that instantiates objects. 
    It is used to instantiate an object from one among a set of classes based on some logic
`, () => {
    it("Factory should make Cat", () => {
        expect(petFactory(PetType.Cat)).toBeInstanceOf(Cat);
    })

    it("Factory should make Dog", () => {
        expect(petFactory(PetType.Dog)).toBeInstanceOf(Dog);
    })
});
