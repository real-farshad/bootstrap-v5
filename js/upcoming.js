const timerDigitContainers = document.querySelectorAll("#timer-digit")

setInterval(() => {
    const [hours, minutes, seconds] = getRemainingTime()
    const timeString = hours + minutes + seconds
    timerDigitContainers.forEach((timerDigitContainer, i) => {
        const lastTimerDigit = timerDigitContainer.firstElementChild
        if (lastTimerDigit.textContent == timeString[i]) return

        const newTimerDigit = timerDigitContainer.lastElementChild
        newTimerDigit.textContent = timeString[i]
        timerDigitContainer.classList.add("timer-digit-transition")
        const startAnimation = setTimeout(() => {
            timerDigitContainer.classList.add("show-next-timer-digit")
            clearTimeout(startAnimation)
        })

        const finishAnimation = setTimeout(() => {
            lastTimerDigit.textContent = timeString[i]
            timerDigitContainer.classList.remove("timer-digit-transition")
            clearTimeout(finishAnimation)

            const cleanUpAnimation = setTimeout(() => {
                timerDigitContainer.classList.remove("show-next-timer-digit")
                clearTimeout(cleanUpAnimation)
            })
        }, 250)
    })
}, 1000)

function getRemainingTime() {
    const now = new Date(Date.now())
    const newYear = new Date(now.getFullYear() + 1, 0, 1)
    const difference = Math.floor((newYear - now) / 1000)

    let hours = "" + Math.floor(difference / 3600)
    if (hours.length < 4) while (hours.length < 4) hours = "0" + hours

    let minutes = "" + Math.floor((difference % 3600) / 60)
    if (minutes.length < 2) minutes = "0" + minutes

    let seconds = "" + (difference % 60)
    if (seconds.length < 2) seconds = "0" + seconds

    return [hours, minutes, seconds]
}
