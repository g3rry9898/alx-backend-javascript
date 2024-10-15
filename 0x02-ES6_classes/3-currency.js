class Currency {
    constructor(code, name) {
        // Verify the types of the attributes
        if (typeof code !== 'string') throw new TypeError('Code must be a string');
        if (typeof name !== 'string') throw new TypeError('Name must be a string');

        // Store attributes in underscore versions
        this._code = code;
        this._name = name;
    }

    // Getter and setter for code
    get code() {
        return this._code;
    }

    set code(newCode) {
        if (typeof newCode !== 'string') throw new TypeError('Code must be a string');
        this._code = newCode;
    }

    // Getter and setter for name
    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== 'string') throw new TypeError('Name must be a string');
        this._name = newName;
    }

    // Method to display the full currency
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}

export default Currency;

