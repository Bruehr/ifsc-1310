"use strict";

const $ = selector => document.querySelector(selector);

const calculateFV = (investment, rate, years) => {
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        futureValue = futureValue * rate/100;
    }
    futureValue = futureValue.toFixed(2);
    return futureValue;
};