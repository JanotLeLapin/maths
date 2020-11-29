interface IRectangleOptions {
    perimeter?: number;
    area?:      number;
    height?:    number;
    width?:     number;
}

export default class Rectangle {
    private h: number = 0;
    private w: number = 0;

    /**
     * @param {IRectangleOptions} options The rectangle properties. Will calculate missing properties.
     */
    constructor(options: IRectangleOptions) {
        if (!options.height && !options.width) throw "Not enough information.";
        if (options.height && options.width) {
            this.h = options.height;
            this.w = options.width;
        }
        else if (options.perimeter) {
            if (options.height) {
                this.w = options.perimeter / 2 - options.height;
                this.h = options.height;
            }
            else if (options.width) {
                this.h = options.perimeter / 2 - options.width;
                this.w = options.width;
            }
        }
        else if (options.area) {
            if (options.height) {
                this.h = options.height;
                this.w = options.area / options.height;
            }
            else if (options.width) {
                this.h = options.area / options.width;
                this.w = options.width;
            }
        }
        if ((options.perimeter && 2 * (this.h + this.w) !== options.perimeter) || (options.area && this.h * this.w !== options.area)) throw "Incoherent data.";
    }

    /**
     * The height of the rectangle
     */
    get height() {
        return this.h
    }

    /**
     * The height of the rectangle
     */
    set height(height: number) {
        this.h = height;
    }

    /**
     * The width of the rectangle
     */
    get width() {
        return this.w;
    }

    /**
     * The width of the rectangle
     */
    set width(width: number) {
        this.w = width;
    }

    /**
     * Returns the perimeter of the rectangle
     */
    get perimeter() {
        return 2 * (this.h + this.w);
    }

    /**
     * Returns the perimeter of the rectangle
     */
    get area() {
        return this.h * this.w;
    }
}