export function textSlice(txt: string, max: number=20) {
    if (txt.length >= max) {
        return `${ txt.slice(0 , max)} ...`
    }
    else {
        return txt
    }
}