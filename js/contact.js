const form = document.querySelector("form")
const emailInput = document.querySelector("#email-input")
const messageInput = document.querySelector("#message-input")

const modalEmail = document.querySelector("#modal-email")
const modalMessage = document.querySelector("#modal-message")

form.addEventListener("click", (e) => {
    e.preventDefault()

    modalEmail.innerHTML = emailInput.value
    modalMessage.innerHTML = messageInput.value
})
