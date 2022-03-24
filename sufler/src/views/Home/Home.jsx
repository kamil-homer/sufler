import React, { useState } from 'react'
import CorrectLetters from '../../components/CorrectLetters/CorrectLetters'
import UnusedLetters from '../../components/UnusedLetters/UnusedLetters'

import styles from './Home.module.scss'

const Home = () => {
    const [unusedLetters, setUnusedLetters] = useState([])
    const [knownPositions, setKnownPositions] = useState([])
    const [unknownPositions, setUnknownPositions] = useState([])

    const handleUnusedLetters = () => {

    }

    const handleCorrectLetters = () => {

    }


    return (
        <div className={styles.base}>
            <div className={styles.content}>
                <UnusedLetters handleUnusedLetters={handleUnusedLetters} />
                <CorrectLetters handleCorrectLetters={handleCorrectLetters} />
            </div>
        </div>
    )
}

export default Home