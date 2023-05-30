import { slides } from "../data/slides.js"

const useOptions = () => {
    const options = {
        delay: 2500,
        root: 'slider-root-child',
        width: 750,
        height: 400,
        slides: slides
    }

    return options
}

export default useOptions