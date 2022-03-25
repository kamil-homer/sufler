import React, { useState } from 'react'

import allWords from '../../assets/fiveLettersOnly.json'

import CorrectLetters from '../../components/CorrectLetters/CorrectLetters'
import UnusedLetters from '../../components/UnusedLetters/UnusedLetters'

import styles from './Home.module.scss'

const Home = () => {
    const [possibleWords, setPossibleWords] = useState(allWords)
    const [isListFiltered, setIsListFiltered] = useState(false)
    const [unusedLetters, setUnusedLetters] = useState([])
    const [knownLetters, setKnownLetters] = useState([
        {
            letter: '',
            isChecked: false,
            index: 0,
        },
        {
            letter: '',
            isChecked: false,
            index: 1,
        },
        {
            letter: '',
            isChecked: false,
            index: 2,
        },
        {
            letter: '',
            isChecked: false,
            index: 3,
        },
        {
            letter: '',
            isChecked: false,
            index: 4,
        },
    ])


    const handleUnusedLetters = (unused) => {
        setUnusedLetters(unused)
    }

    const handleKnownLetters = (index, letter, isChecked) => {
        const currentState = [...knownLetters]
        let selectedLetter = currentState[index]
        const changeOnlyState = letter === null
        if (changeOnlyState) {
            selectedLetter = { ...selectedLetter, isChecked }
        }
        if (letter === '' || letter) {
            selectedLetter = { ...selectedLetter, letter }
        }
        knownLetters[index] = selectedLetter
        setKnownLetters([...knownLetters])
    }

    const checkPossibleWordsWithUnused = () => {
        console.log(possibleWords.length)
        if (unusedLetters.length) {
            const unusedLettersArray = unusedLetters.split('')
            let filteredWords = [...allWords]
            unusedLettersArray.forEach((letter) => {
                const newFiltered = filteredWords.filter((word) => !word.includes(letter))
                filteredWords = [...newFiltered]
            })

            // step 2: check known letters
            checkPossibleWordsWithKnownLetters(filteredWords)
        }
    }

    const checkPossibleWordsWithKnownLetters = (filteredWords) => {
        const lettersWithKnownPosition = knownLetters.filter((letter) => letter.isChecked)
        const lettersWithUnknownPosition = knownLetters.filter((letter) => letter.letter && !letter.isChecked)

        let filteredWithPositions = [...filteredWords]
        lettersWithKnownPosition.forEach(({ letter, index }) => {
            const newFiltered = filteredWithPositions.filter((word) => word[index] === letter)
            filteredWithPositions = [...newFiltered]
        })

        lettersWithUnknownPosition.forEach(({ letter: knownLetter, index: wrongPosition }) => {
            const newFiltered = filteredWithPositions.filter((word) => {

                const hasKnownLetter = word.includes(knownLetter)
                if (hasKnownLetter) {
                    return [...word].indexOf(knownLetter) !== wrongPosition
                }
                return false
            })

            filteredWithPositions = [...newFiltered]
        })

        setIsListFiltered(true)
        setPossibleWords(filteredWithPositions)
    }

    return (
        <div className={styles.base}>
            <div className={styles.content}>
                <UnusedLetters handleUnusedLetters={handleUnusedLetters} unusedLetters={unusedLetters} />
                <CorrectLetters handleKnownLetters={handleKnownLetters} knownLetters={knownLetters} />
                <button onClick={checkPossibleWordsWithUnused} className={styles.button}>
                    sprawdź słowa
                </button>

                {isListFiltered && (
                    <div className={styles.wordsWrapper}>
                        {possibleWords.map((word) => <pre key={word}>{word}</pre>)}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home