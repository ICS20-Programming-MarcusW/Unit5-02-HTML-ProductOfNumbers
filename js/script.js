// Copyright (c) 2022 Marcus Wehbi All rights reserved
// Created by: Marcus Wehbi
// Created on: May 2022
// This file contains the JS functions for index.html
"use strict"

/**
 * This function displays the product of two numbers using loops
 */
function displayProduct() {
    // initialize variables
    // set counter to 0
    let counter = 0;
    // set sum to 0
    let sum = 0;
    // get the first integer from the user
    let numOne = parseInt(document.getElementById('int-one').value);
    // get the second integer from the user
    let numTwo = parseInt(document.getElementById('int-two').value);

    // use a for loop to calculate the sum of products
    for (counter = 1; counter <= numTwo; counter++) {
        sum = sum + numOne
    }
    // if one of the integers is less than 0 (negative), then subtract as the product should be negative
    if (numOne < 0 || numTwo < 0) {
        for (counter = -1; counter >= numTwo; counter--) {
            sum = sum - numOne;
        }
    }
    // display the product of the integers back to the user
    document.getElementById('display-results').innerHTML = "The product of these numbers is: " + sum
}