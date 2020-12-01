class IncompatibleDataError extends Error {
    constructor (message: string) {
        super(message);
        this.name = 'IncompatibleData';
    }
}

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
     * @description Creates a neat rectangle.
     * @param {IRectangleOptions} options The rectangle properties. Will calculate missing properties.
     */
    constructor(options: IRectangleOptions) {
        this.h = options.height ? options.height : 0;
        this.w = options.width ? options.width : 0;
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
        if (options.perimeter && 2 * (this.h + this.w) !== options.perimeter) throw new IncompatibleDataError('2 * (height: ' + this.h + ' + width: ' + this.w + ') != perimeter: ' + options.perimeter);
        if (options.area && this.h * this.w !== options.area) throw new IncompatibleDataError('height: ' + this.h + ' * width: ' + this.w + ' != area: ' + options.area);
    }

    /**
     * @description The height of the rectangle in cm
     */
    get height() {
        return this.h
    }

    set height(height: number) {
        this.h = height;
    }

    /**
     * @description The width of the rectangle in cm
     */
    get width() {
        return this.w;
    }

    set width(width: number) {
        this.w = width;
    }

    /**
     * @description Returns the perimeter of the rectangle in cm
     */
    get perimeter() {
        return 2 * (this.h + this.w);
    }

    /**
     * @description Returns the area of the rectangle in cm²
     */
    get area() {
        return this.h * this.w;
    }
}
