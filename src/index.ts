import { logUsedMemory } from './util';

import Vector from './vector';

const exemple7 = () => {
    const a = new Vector(-1, 1);
    const b = new Vector(3, 2);
    const c = new Vector(-2, -3);
    const d = new Vector(6, -1);
    const e = new Vector(5, 0);

    const ab = Vector.join(a, b);
    const cd = Vector.join(c, d);

    console.log(ab.isColinear(cd));
}

exemple7();

logUsedMemory();
