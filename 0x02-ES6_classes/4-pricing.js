// Import the Currency class from 3-currency.js
import Currency from './3-currency.js';

class Pricing {
    constructor(amount, currency) {
        // Verify the types of the attributes
        if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
        if (!(currency instanceof Currency)) throw new TypeError('Currency must be an instance of Currency');

        // Store attributes in underscore versions
        this._amount = amount;
        this._currency = currency;
    }

    // Getter and setter for amount
    get amount() {
        return this._amount;
    }

    set amount(newAmount) {
        if (typeof newAmount !== 'number') throw new TypeError('Amount must be a number');
        this._amount = newAmount;
    }

    // Getter and setter for currency
    get currency() {
        return this._currency;
    }

    set currency(newCurrency) {
        if (!(newCurrency instanceof Currency)) throw new TypeError('Currency must be an instance of Currency');
        this._currency = newCurrency;
    }

    // Method to display the full price
    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    // Static method to convert price
    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
            throw new TypeError('Both amount and conversionRate must be numbers');
        }
        return amount * conversionRate;
    }
}

export default Pricing;

