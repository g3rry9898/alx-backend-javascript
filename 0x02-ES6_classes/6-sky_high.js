// Import the Building class from 5-building.js
import Building from './5-building.js';

class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        // Call the parent class constructor with sqft
        super(sqft);

        // Verify the type of the floors attribute
        if (typeof floors !== 'number') throw new TypeError('Floors must be a number');

        // Store attributes in underscore versions
        this._floors = floors;
    }

    // Getter for floors
    get floors() {
        return this._floors;
    }

    // Override the evacuationWarningMessage method
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}

export default SkyHighBuilding;

