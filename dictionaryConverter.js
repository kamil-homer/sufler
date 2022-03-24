const fs = require('fs')
// Load full dictionary and filter only those with specific length
fs.readFile('./slowa.txt', 'utf8', (error, data) => {
    const wordLength = 5
    if (error) {
        console.log(error)
        return
    }
    const allDictionary = data.split(/\r?\n/)
    const fiveLettersOnly = allDictionary.filter((word) => word.length === wordLength)
    fs.writeFileSync('fiveLettersOnly.json', JSON.stringify(fiveLettersOnly))
})
