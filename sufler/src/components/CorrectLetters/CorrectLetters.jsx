import React from 'react'

import classNames from 'classnames'

import styles from './CorrectLetters.module.scss'

function CorrectLetters({ handleKnownLetters, knownLetters }) {
    const NUMBER_OF_INPUTS = 5
    const emptyInputsArray = [...Array(NUMBER_OF_INPUTS)]

    const renderInputs = () => {
        return emptyInputsArray.map((input, index) => {
            const hasContent = knownLetters[index].letter
            const isChecked = knownLetters[index].isChecked

            const inputClassName = classNames(styles.letterInput, {
                [styles.letterInput_filled]: hasContent && !isChecked,
                [styles.letterInput_checked]: hasContent && isChecked,
            })

            return (
                <div key={`inputContainer_${index}`}>
                    <input className={inputClassName} maxLength="1" name={`input${index}`} type="text" value={knownLetters[index].letter} onChange={e => handleKnownLetters(index, e.target.value.toLowerCase())}></input>
                    <input className={inputClassName} name={`checkbox${index}`} disabled={!knownLetters[index].letter} type="checkbox" value={knownLetters[index].isChecked} onChange={e => handleKnownLetters(index, null, e.target.checked)}></input>
                </div>
            )
        })
    }

    const inputs = renderInputs()

    return (
        <div className={styles.base}>
            <div>Odgadnięte litery. Oznacz litery z poprawną pozycją.</div>
            <div className={styles.row}>
                {inputs}
            </div>
        </div>
    )
}

export default CorrectLetters