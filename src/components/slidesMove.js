const slidesMove = (delay = 2500, count = 15) => {
    const sliderLine = document.querySelector('.slider-line')
    let offset = 0
    let eventCount = count
    const interval = setInterval(() => {
        sliderLine.style.left = offset + "px"
        offset -= 750
        eventCount -= 1
        if (eventCount < 1) {
            window.clearInterval(interval)
        }
    }, delay);
    return eventCount
}

export default slidesMove