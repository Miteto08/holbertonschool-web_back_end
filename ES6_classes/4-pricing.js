/* eslint-disable */
import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount,
            this._currency = currency
    }

    get amount() {
        return this._amount
    }

    get currency() {
        return this._currency
    }

    set amount(newAmount) {
        this._amount = newAmount
    }

    set currency(newCurrency) {
        this._currency = newCurrency
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, convertPrice) {
        return amount * convertPrice
    }
}