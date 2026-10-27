// requires lambda.js

assert( id(id) === id );

assert( konst(5)(1)           === 5 );
assert( konst(true)(null)     === true );
assert( konst(id)(undefined)  === id );

assert( F(1)(5)           === 5 );
assert( F(null)(true)     === true );
assert( F(undefined)(id)  === id );

const p = pair(1)(2);
assert( fst(p) === 1 );
assert( snd(p) === 2 );

const updatedPair = pair(fst(p) + 1)(snd(p));
