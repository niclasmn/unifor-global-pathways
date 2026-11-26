import { describe, it, expect } from "vitest";
import { MIN_ATTENDANCE, canPublish, eligibility, recommend } from "./data";
describe("Institutional rules", () => {
  it("requires minimum attendance of 75 percent", () => expect(MIN_ATTENDANCE).toBe(75));
  it("prevents publication of a DRI draft", () =>
    expect(canPublish("Rascunho", Array(7).fill(true))).toBe(false));
  it("requires every editorial check before Marketing publication", () => {
    expect(canPublish("Aguardando Marketing", [true, true, true, true, true, true, false])).toBe(
      false,
    );
    expect(canPublish("Aguardando Marketing", Array(7).fill(true))).toBe(true);
  });
  it("does not invent an official PMG approval threshold", () =>
    expect(eligibility("Regularmente matriculado", 8, "B2")).toContain(
      "depende da nota mínima do edital",
    ));
  it("flags a suspended enrolment", () =>
    expect(eligibility("Trancado", 9, "B2")).toContain("Atenção aos requisitos"));
  it("rejects an invalid PMG", () =>
    expect(eligibility("Regularmente matriculado", 11, "B2")).toContain("entre 0 e 10"));
  it("uses language preferences in destination recommendations", () => {
    expect(recommend(["Francês"])).toEqual([2, 0]);
    expect(recommend(["Português ou espanhol"])).toEqual([0, 1]);
  });
});
