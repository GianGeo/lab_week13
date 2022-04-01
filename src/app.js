const Div_event = document.querySelectorAll (".original-container div");
const Area_copied = document.querySelector (".copy-container");

//*// Clone
Div_event.forEach((element) =>
    element.addEventListener("click", (evt) => {
        let cloneMaterial = evt.target.parentElement.outerHTML;
        Area_copied.insertAdjacentHTML("beforeend", cloneMaterial);
    })
);