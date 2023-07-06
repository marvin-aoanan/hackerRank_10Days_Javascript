function Factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * Factorial(n-1);
    }
}
// 4*3*2*1 = 24 
console.log(Factorial(5));