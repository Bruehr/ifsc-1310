"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var image1 = $("#image1");
    var image2 = $("#image2");

    // preload images
    var links = $("#image_list").querySelectorAll("a");

    for (let links of links) {
        const image = new Image();
        image.src = link.href;
    }

    

