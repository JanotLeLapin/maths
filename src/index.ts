import { logUsedMemory } from './util';

import Vector from './vector';

const exemple5 = () => {
    const a = new Vector(1, 2);
    const b = new Vector(-3, 1);
    const c = new Vector(3, -1);

    const ab = Vector.join(a, b);
    const ac = Vector.join(a, c);
    const bc = Vector.join(b, c);

    console.log('=== Example 5 ===');
    console.log('M(' + ab.middle().coordinates + '), ab(' + ab.coordinates + ')');
    console.log('N(' + ac.middle().coordinates + '), ac(' + ac.coordinates + ')');
    console.log('P(' + bc.middle().coordinates + '), bc(' + bc.coordinates + ')');
};

const exemple6 = () => {
    const a = new Vector(-2, 1);
    const b = new Vector(4, 2);
    const c = new Vector(1/2, -2);

    const ab = Vector.join(a, b);
    const ac = Vector.join(a, c);
    const bc = Vector.join(b, c);

    console.log('=== Exercice 6 ===');

    console.log('M(' + ab.middle().coordinates + '), ab(' + ab.coordinates + ')');
    console.log('N(' + ac.middle().coordinates + '), ac(' + ac.coordinates + ')');
    console.log('P(' + bc.middle().coordinates + '), bc(' + bc.coordinates + ')');

    const s = new Vector(7, 9);
    const t = new Vector(3, 12);
    console.log('Coordonnées du milieu du segment ST : (' + Vector.join(s, t).coordinates + ').');
};

exemple6();

logUsedMemory();
