import responseJson from "./response.js"


// console.log(responseJson);

let predictions = []

responseJson.map((results) => {
    // predictions.concat(results.prediction)
    // console.log(results.prediction)
    console.log("Count ", results.prediction.length)
    predictions = predictions.concat(results.prediction)
});

const resultPrediction = predictions
    .filter((prediction) => prediction.label !== 'table')
    .map((prediction) => {

        return {
            label: prediction.label,
            ocr_text: prediction.ocr_text,
            status: prediction.status,
            score: prediction.score,
            page_no: prediction.page_no
        }
    })

const predictionsCells = predictions
    .filter((prediction) => prediction.label === 'table')

let cells = []

predictionsCells.map((cell) => {
    cells = cells.concat(cell.cells)
})

console.log(cells.map((cell) => {
    return {
        label: cell.label,
        text: cell.text,
        score: cell.score,
        verification_status: cell.verification_status
    }
}))
