import { logUsedMemory } from './util';

import Vector from './vector';

const u = new Vector(2, -2);
const v = new Vector(-1, Math.sqrt(2));
const w = new Vector(1 / Math.sqrt(3), 3);

console.log('=== Ex 2 ===');
console.log('u - v(' + u.sub(v).coordinates + ')')
console.log('2v - u + w(' + v.mul(2).sub(u).add(w).coordinates + ')');

logUsedMemory();
