class HolbertonClass {
    constructor(size, location) {
        // Verify the types of the attributes
        if (typeof size !== 'number') throw new TypeError('Size must be a number');
        if (typeof location !== 'string') throw new TypeError('Location must be a string');

        // Store attributes in underscore versions
        this._size = size;
        this._location = location;
    }

    // Getter for size
    get size() {
        return this._size;
    }

    // Setter for size
    set size(newSize) {
        if (typeof newSize !== 'number') throw new TypeError('Size must be a number');
        this._size = newSize;
    }

    // Getter for location
    get location() {
        return this._location;
    }

    // Setter for location
    set location(newLocation) {
        if (typeof newLocation !== 'string') throw new TypeError('Location must be a string');
        this._location = newLocation;
    }

    // Override valueOf to return the size when cast to a number
    valueOf() {
        return this._size;
    }

    // Override toString to return the location when cast to a string
    toString() {
        return this._location;
    }
}

export default HolbertonClass;

