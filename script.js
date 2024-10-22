function swapValues(a, b) {
    console.log(`Before swap: a = ${a}, b = ${b}`);
    a = a + b; 
    b = a - b; 
    a = a - b; 
    console.log(`After swap: a = ${a}, b = ${b}`);
    return [a, b];
}

// Example usage:
let x = 5, y = 10;
[x, y] = swapValues(x, y);
