export const adapter: Test = {
  default: "40px",
  medium: "36px",
  small: "32px",
  mini: "28px",
};

export interface Test {
  medium: string;
  small: string;
  mini: string;
  default: string;
}
interface scoreTest {
  "3true": number;
  "2true": number;
  "1true": number;
  "0true": number;
}
const scoreDict: scoreTest = {
  "3true": 70,
  "2true": 55,
  "1true": 30,
  "0true": 10,
};

export function calculateScore(...a: any): number {
  const trueCount = a.filter((bool: any) => {
    if (bool) {
      return bool;
    }
  }).length;
  const key = `${trueCount}true`;
  return scoreDict[key as keyof scoreTest];
}
