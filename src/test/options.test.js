import useOptions from "../hook/useOptions";
import { slides } from "../data/slides";

test('properly use options', () => {
    expect(useOptions()).toEqual({
        delay: 2500,
        root: 'slider-root-child',
        width: 750,
        height: 400,
        slides: slides
    })
})