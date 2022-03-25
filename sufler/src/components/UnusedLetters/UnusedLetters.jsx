import React from 'react'

import styles from './UnusedLetters.module.scss'

function UnusedLetters({ unusedLetters, handleUnusedLetters }) {
    return (
        <>
            <div>Litery, których nie ma w haśle</div>
            <input className={styles.letterInput} name='unused' type="text" value={unusedLetters} onChange={e => handleUnusedLetters(e.target.value)}></input>
        </>
    )
}

export default UnusedLetters