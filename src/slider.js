import errorChecking from "./components/errorChecking.js"
import getSlidesFromDom from "./components/getSlidesFromDom.js"
import slidesMove from "./components/slidesMove.js"

const slider = (options) => {
    errorChecking(options)

    getSlidesFromDom(options.slides, options.width, options.height)

    slidesMove(options.delay, options.slides.length)
}



export default slider