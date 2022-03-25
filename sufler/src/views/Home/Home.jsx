import React, { useState, useEffect } from 'react'

import allWords from '../../assets/fiveLettersOnly.json'

import CorrectLetters from '../../components/CorrectLetters/CorrectLetters'
import UnusedLetters from '../../components/UnusedLetters/UnusedLetters'

import styles from './Home.module.scss'

const Home = () => {
    const [possibleWords, setPossibleWords] = useState(allWords)
    const [unusedLetters, setUnusedLetters] = useState([])
    const [knownLetters, setKnownLetters] = useState({
        '0': {
            letter: '',
            isChecked: false,
        },
        '1': {
            letter: '',
            isChecked: false,
        },
        '2': {
            letter: '',
            isChecked: false,
        },
        '3': {
            letter: '',
            isChecked: false,
        },
        '4': {
            letter: '',
            isChecked: false,
        },
    })


    const handleUnusedLetters = (unused) => {
        console.log(unused, unused.split(''))
        setUnusedLetters(unused)
    }

    const handleKnownLetters = (index, letter = null, isChecked = false) => {
        console.log(knownLetters[index], index, letter, isChecked)
        const currentState = { ...knownLetters }
        let selectedLetter = currentState[index]
        if (letter) {
            selectedLetter = { ...selectedLetter, letter }
        }
        else if (isChecked) {
            selectedLetter = { ...selectedLetter, isChecked }
        }
        knownLetters[index] = selectedLetter
        setKnownLetters({ ...knownLetters })
    }

    const checkPossibleWords = () => {
        if (unusedLetters.length && possibleWords) {
            const unusedLettersArray = unusedLetters.split('')
            let filteredWords = []
            filteredWords = [...possibleWords]
            unusedLettersArray.forEach((letter) => {
                const newFiltered = filteredWords.filter((word) => !word.includes(letter))
                filteredWords = [...newFiltered]
            })
            console.log(possibleWords.length, filteredWords.length)
            setPossibleWords(filteredWords)
        }
    }

    return (
        <div className={styles.base}>
            <div className={styles.content}>
                <UnusedLetters handleUnusedLetters={handleUnusedLetters} unusedLetters={unusedLetters} />
                <CorrectLetters handleKnownLetters={handleKnownLetters} knownLetters={knownLetters} />
                <button onClick={checkPossibleWords}>
                    sprawdź słowa
                </button>
            </div>
        </div>
    )
}

export default Home