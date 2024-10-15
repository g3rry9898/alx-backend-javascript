class Building {
    constructor(sqft) {
        // Verify the type of the attribute
        if (typeof sqft !== 'number') throw new TypeError('Square footage must be a number');

        // Store the attribute in an underscore version
        this._sqft = sqft;

        // Ensure the class cannot be instantiated directly
        if (new.target === Building) {
            throw new TypeError('Cannot instantiate abstract class Building directly');
        }
    }

    // Getter for sqft
    get sqft() {
        return this._sqft;
    }

    // Abstract method to be implemented by subclasses
    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}

export default Building;

