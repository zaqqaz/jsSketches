// Singleton spec:
//     - There should be only one instance allowed for a class and
//     - We should allow global point of access to that single instance.

const checkV1 = jest.fn();

class NotASingleton {
    constructor() {
        checkV1();
    }
}

export const SingletonV1 = new NotASingleton(); // now it's singleton

const checkV2 = jest.fn();

export class SingletonV2 {
    static instance: SingletonV2 = new SingletonV2();

    constructor() {
        checkV2();
    }

    public static getInstance() {
        return SingletonV2.instance;
    }
}

describe("V1", () => {
    it("There should be only one instance allowed for a class", () => {
        expect(SingletonV1).toBeInstanceOf(NotASingleton);
        expect(checkV1).toHaveBeenCalledTimes(1);
    });
});

describe("V2", () => {
    it("There should be only one instance allowed for a class", () => {
        expect(SingletonV2.getInstance()).toBeInstanceOf(SingletonV2);
        expect(checkV2).toHaveBeenCalledTimes(1);
    });
});
