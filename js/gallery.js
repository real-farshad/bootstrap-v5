const images = document.querySelectorAll("#gallery-img")
const overlay = document.querySelector("#overlay")
const imagePreview = document.querySelector("#image-preview")

for (const image of images) {
    image.addEventListener("click", () => {
        overlay.classList.remove("d-none")
        imagePreview.setAttribute("src", image.getAttribute("src"))
        imagePreview.setAttribute("alt", image.getAttribute("alt"))
        setTimeout(() => {
            imagePreview.classList.add("show-img-preview")
        })
    })
}

overlay.addEventListener("click", () => {
    overlay.classList.add("d-none")
    imagePreview.setAttribute("src", "")
    imagePreview.setAttribute("alt", "")
    imagePreview.classList.remove("show-img-preview")
})
