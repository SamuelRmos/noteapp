
const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            long:0
        }
        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})