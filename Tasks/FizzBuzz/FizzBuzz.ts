export const fizzBuzz = (n: number) => [...Array(n)].map((v, i) => {
    const val = i + 1;

    if (val % 3 === 0 && val % 5 === 0)
        return "FizzBuzz";

    if (val % 3 === 0)
        return "Fizz";

    if (val % 5 === 0)
        return "Buzz";

    return val + "";
});
