import { revertString } from "../../reversStr/reverseString.js"; // reversStr-utils

describe("tests for revertString function", () => {
    it("should reverse string", () => expect(revertString("Irina")).toBe("anirI"));
});