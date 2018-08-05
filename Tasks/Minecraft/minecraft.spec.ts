import { Action, getRequiredActions } from "./minecraft";

describe("Minecraft. Should return needed actions to make expected material", () => {
    const chop = new Action("tree", "chop", "logs");
    const saw = new Action("logs", "saw", "planks");
    const lathe = new Action("planks", "lathe", "sticks");
    const makeFence = new Action("sticks", "make fence", "fence");
    const makeLadder = new Action("sticks", "make ladder", "ladder");
    const melt = new Action("ice", "melt", "water");
    const freeze = new Action("water", "freeze", "ice");
    const boil = new Action("water", "boil", "steam");
    const condensate = new Action("steam", "condensate", "water");
    const sublime = new Action("ice", "sublime", "steam");
    const deposit = new Action("steam", "deposit", "ice");

    it("To get water from ice, you need to melt it", () => {
        expect(getRequiredActions("ice", "water", [melt])).toEqual([melt]);
    });

    it("If melting is not an option, I can still get water", () => {
        expect(getRequiredActions("ice", "water", [freeze, boil, condensate, sublime, deposit])).toEqual([sublime, condensate]);
    });

    it("To get planks from tree, you need chop & saw it", () => {
        expect(getRequiredActions("tree", "planks", [chop, saw, lathe])).toEqual([chop, saw]);
    });

    it("Should return actions needed to get ladder from tree", () => {
        expect(getRequiredActions("tree", "ladder", [chop, saw, makeFence, lathe, makeLadder])).toEqual([chop, saw, lathe, makeLadder]);
    });

    it("Should return nothing", () => {
        expect(getRequiredActions("tree", "notExist", [chop, saw, makeFence, lathe, makeLadder])).toBeUndefined();
    });
});


