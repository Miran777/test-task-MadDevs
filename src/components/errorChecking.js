const errorChecking = (attributes) => {
    try {
        if (!attributes.delay) throw new Error(console.log('Один из аттрибутов не указан'))
        if (!attributes.root) throw new Error(console.log('Один из аттрибутов не указан'))
        if (!attributes.width) throw new Error(console.log('Один из аттрибутов не указан'))
        if (!attributes.height) throw new Error(console.log('Один из аттрибутов не указан'))
        if (!attributes.slides) throw new Error(console.log('Один из аттрибутов не указан'))
    } catch (error) {
        console.log('Укажите все аттрибуты')
    }
}
export default errorChecking