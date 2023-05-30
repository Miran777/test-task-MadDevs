import { slides } from "../data/slides.js"


const getSlidesFromDom = (slidesArr = slides, elemWidth = 750, elemHeight = 400, root = 'slider-root-child') => {
    const array = []
    
    
    for (let i = 1; i <= slidesArr.length; i++) {
        const elem = document.getElementsByClassName(`${root}-${i}`)
        elem[0].style.cssText = `
        background: ${slidesArr[i-1].color};
        width: ${elemWidth}px;
        height: ${elemHeight}px;
        `
        elem[0].innerText = slidesArr[i-1].text
        array.push(elem)
    }

}

export default getSlidesFromDom
