/* add code here */

window.addEventListener("load", function pageFullyLoaded(e) {

    let divWithIdOfthumbnailsIs = document.querySelector("div#thumbnails");

    divWithIdOfthumbnailsIs.addEventListener("click", function thmbImgsFn(e) {

        if (e.target.tagName === "IMG") {

            document.querySelector("figure#featured img").src = e.target.src;

            document.querySelector("figure#featured img").title = e.target.title;

            document.querySelector("figure#featured figcaption").textContent = e.target.title;

        }

    });

    let figureElis = document.querySelector("figure#featured");

    figureElis.addEventListener("mouseover", function mouseCame(e) {

        if (e.target.tagName === "IMG") {

            document.querySelector("figure#featured figcaption").style.opacity = 80 / 100;

        }

    });

    figureElis.addEventListener("mouseout", function mouseGone(e) {

        document.querySelector("figure#featured figcaption").style.opacity = 0;

    });

});