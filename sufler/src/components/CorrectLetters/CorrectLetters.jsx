import React from 'react'

import styles from './CorrectLetters.module.scss'

function CorrectLetters({ handleKnownLetters, knownLetters }) {
    return (
        <div className={styles.base}>
            <div>Odgadnięte litery. Oznacz litery z poprawną pozycją.</div>
            <div className={styles.row}>
                <div>
                    <input className={styles.letterInput} maxLength="1" name='input0' type="text" value={knownLetters[0].letter} onChange={e => handleKnownLetters(0, e.target.value)}></input>
                    <input className={styles.letterInput} name='isInput0Certain' type="checkbox" value={knownLetters[0].isChecked} onChange={e => handleKnownLetters(0, null, e.target.checked)}></input>
                </div>
                <div>
                    <input className={styles.letterInput} maxLength="1" name='input1' type="text" value={knownLetters[1].letter} onChange={e => handleKnownLetters(1, e.target.value)}></input>
                    <input className={styles.letterInput} name='isInput1Certain' type="checkbox" value={knownLetters[1].isChecked} onChange={e => handleKnownLetters(1, null, e.target.checked)}></input>
                </div>
                {/* <div>
                    <input className={styles.letterInput} maxLength="1" name='input2' type="text" value={input2.letter} onChange={e => setInput2(e.target.value)}></input>
                    <input className={styles.letterInput} name='isInput2Certain' type="checkbox" value={input2.isChecked} onChange={setInput2Certain}></input>
                </div>
                <div>
                    <input className={styles.letterInput} maxLength="1" name='input3' type="text" value={input3.letter} onChange={e => setInput3(e.target.value)}></input>
                    <input className={styles.letterInput} name='isInput3Certain' type="checkbox" value={input3.isChecked} onChange={setInput3Certain}></input>
                </div>
                <div>
                    <input className={styles.letterInput} maxLength="1" name='input4' type="text" value={input4.letter} onChange={e => setInput4(e.target.value)}></input>
                    <input className={styles.letterInput} name='isInput4Certain' type="checkbox" value={input4.isChecked} onChange={setInput4Certain}></input>
                </div> */}

            </div>
        </div>
    )
}

export default CorrectLetters