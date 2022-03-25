import React from 'react'

import styles from './UnusedLetters.module.scss'

function UnusedLetters({ unusedLetters, handleUnusedLetters }) {
    return (
        <div className={styles.base}>
            <div>Litery, których nie ma w haśle. Bez przecinków.</div>
            <input
                className={styles.letterInput}
                name='unused'
                type="text"
                placeholder='QWERTY'
                value={unusedLetters}
                onChange={e => handleUnusedLetters(e.target.value)}>
            </input>
        </div>
    )
}

export default UnusedLetters