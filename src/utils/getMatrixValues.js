
const getMatrixValues = (value) => {
    const matrixValues = value.substr(7).split(",").map(item => parseInt(item))
    return {
        scaleX: matrixValues[0],
        skewY: matrixValues[1],
        skewX: matrixValues[2],
        scaleY: matrixValues[3],
        translateX: matrixValues[4],
        translateY: matrixValues[5],
    }
}
export default getMatrixValues


/**
 * matrixValue
 * [0] = scaleX
 * [1] = skewY
 * [2] = skewX
 * [3] = scaleY
 * [4] = translateX
 * [5] = translateY
 */