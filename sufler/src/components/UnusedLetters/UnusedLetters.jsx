import React, { useState } from 'react'

import styles from './UnusedLetters.module.scss'

function UnusedLetters() {
    const [unused, setUnused] = useState('')
    return (
        <div>
            <div>Litery, których nie ma w haśle</div>
            <input className={styles.letterInput} name='unused' type="text" value={unused} onChange={e => setUnused(e.target.value)}></input>

        </div>


    )
}

export default UnusedLetters