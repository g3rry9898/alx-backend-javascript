class Car {
    constructor(brand, motor, color) {
        // Verify the types of the attributes
        if (typeof brand !== 'string') throw new TypeError('Brand must be a string');
        if (typeof motor !== 'string') throw new TypeError('Motor must be a string');
        if (typeof color !== 'string') throw new TypeError('Color must be a string');

        // Store attributes in underscore versions
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    // Getter for brand
    get brand() {
        return this._brand;
    }

    // Setter for brand
    set brand(newBrand) {
        if (typeof newBrand !== 'string') throw new TypeError('Brand must be a string');
        this._brand = newBrand;
    }

    // Getter for motor
    get motor() {
        return this._motor;
    }

    // Setter for motor
    set motor(newMotor) {
        if (typeof newMotor !== 'string') throw new TypeError('Motor must be a string');
        this._motor = newMotor;
    }

    // Getter for color
    get color() {
        return this._color;
    }

    // Setter for color
    set color(newColor) {
        if (typeof newColor !== 'string') throw new TypeError('Color must be a string');
        this._color = newColor;
    }

    // Method to clone the car
    cloneCar() {
        return new Car(this._brand, this._motor, this._color);
    }
}

export default Car;

