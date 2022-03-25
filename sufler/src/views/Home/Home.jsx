import React, { useState } from 'react'
import CorrectLetters from '../../components/CorrectLetters/CorrectLetters'
import UnusedLetters from '../../components/UnusedLetters/UnusedLetters'

import styles from './Home.module.scss'

const Home = () => {
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


    return (
        <div className={styles.base}>
            <div className={styles.content}>
                <UnusedLetters handleUnusedLetters={handleUnusedLetters} unusedLetters={unusedLetters} />
                <CorrectLetters handleKnownLetters={handleKnownLetters} knownLetters={knownLetters} />
            </div>
        </div>
    )
}

export default Home