// requires function.js


// IIFE
( function() {
    let x = true;
    assert(x);
})();

try { // test x is not in scope
    x;
    assert(false);
} catch (e) {
    assert(true);
}


assert( hasNoReturn(1)    === undefined);
assert( hasReturn(1)      === 1);

assert( lambdaFun1(1)     === 1);
assert( lambdaFun2(1,1)   === 2);
assert( lambdaFun3(1)(1)  === 2);
assert( lambdaFun4(1)(1)  === 2);
assert( any(1)(1)         === 2);
