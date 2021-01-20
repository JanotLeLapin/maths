import { logUsedMemory } from './util';

import Vector from './vector';
import Point from './point';

const exemple5 = () => {
    const a = new Point(1, 2);
    const b = new Point(-3, 1);
    const c = new Point(3, -1);

    const ab = Point.toVector(a, b);
    const ac = Point.toVector(a, c);
    const bc = Point.toVector(b, c);

    console.log('=== Example 5 ===');
    console.log('M(' + ab.middle().coordinates + '), ab(' + ab.coordinates + ')');
    console.log('N(' + ac.middle().coordinates + '), ac(' + ac.coordinates + ')');
    console.log('P(' + bc.middle().coordinates + '), bc(' + bc.coordinates + ')');
};

const exemple6 = () => {
    const a = new Point(-2, 1);
    const b = new Point(4, 2);
    const c = new Point(1/2, -2);

    const ab = Point.toVector(a, b);
    const ac = Point.toVector(a, c);
    const bc = Point.toVector(b, c);

    console.log('=== Exercice 6 ===');

    console.log('M(' + ab.middle().coordinates + '), ab(' + ab.coordinates + ')');
    console.log('N(' + ac.middle().coordinates + '), ac(' + ac.coordinates + ')');
    console.log('P(' + bc.middle().coordinates + '), bc(' + bc.coordinates + ')');

    const s = new Point(7, 9);
    const t = new Point(3, 12);
    console.log('Coordonnées du milieu du segment ST : (' + Point.toVector(s, t).coordinates + ').');
};

exemple6();

logUsedMemory();
