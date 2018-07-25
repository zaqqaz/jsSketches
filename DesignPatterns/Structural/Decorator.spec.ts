// The major point of Decarator patter is to enable run-time changes
// Eg. we would like to build House, but we may not know how house to look
// until the programm is running, and this allow us to easily modify it
// Granted, this can be done via subclassing, but not as nicely

// Classes version

class House {
    public makeHouse(): string {
        return "BaseHouse";
    }
}

class WithLightsHouseDecorator implements House {
    private house: House;

    constructor(house: House) {
        this.house = house;
    }

    private addLights(): string {
        return " + Lights";
    }

    public makeHouse(): string {
        return this.house.makeHouse() + this.addLights();
    }
}


class WithColorHouseDecorator implements House {
    private house: House;

    constructor(house: House) {
        this.house = house;
    }

    private addColor(): string {
        return " + Color";
    }

    public makeHouse(): string {
        return this.house.makeHouse() + this.addColor();
    }
}

describe("Build house", () => {
    it("With color", () => {
        const house = new WithColorHouseDecorator(new House());
        expect(house.makeHouse()).toBe("BaseHouse + Color");
    });

    it("With lights and color", () => {
        const house = new WithColorHouseDecorator(new WithLightsHouseDecorator(new House()));
        expect(house.makeHouse()).toBe("BaseHouse + Lights + Color");
    })
});
