export default class Triangle {
    private b: number;
    private h:    number;

    /**
     * @description Creates a neat triangle.
     * @param {number} b The base of the triangle in cm.
     * @param {number} h The height of the triangle in cm.
     */
    constructor (b: number, h: number) {
        this.b = b;
        this.h = h;
    }

    /**
     * @description The base of the triangle in cm.
     */
    get base() {
        return this.b;
    }

    set base(base: number) {
        this.b = base;
    }

    /**
     * @description The height of the triangle in cm.
     */
    get height() {
        return this.h;
    }

    set height(height: number) {
        this.h = height;
    }

    /**
     * @description Returns the area of the rectangle in cm².
     */
    get area() {
        return 1 / 2 * this.b * this.h;
    }
}
