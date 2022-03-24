import React, { useState } from 'react'

import styles from './CorrectLetters.module.scss'

function CorrectLetters() {
    const [input0, setInput0] = useState('')
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [input4, setInput4] = useState('')
    const [isInput0Certain, setInput0Certain] = useState(false)
    const [isInput1Certain, setInput1Certain] = useState(false)
    const [isInput2Certain, setInput2Certain] = useState(false)
    const [isInput3Certain, setInput3Certain] = useState(false)
    const [isInput4Certain, setInput4Certain] = useState(false)

    return (
        <div className={styles.base}>
            <div>Odgadnięte litery. Oznacz litery z poprawną pozycją.</div>
            <div className={styles.row}>
                <div>
                    <input className={styles.letterInput} maxLength="1" name='input0' type="text" value={input0} onChange={e => setInput0(e.target.value)}></input>
                    <input className={styles.letterInput} name='isInput0Certain' type="checkbox" value={isInput0Certain} onChange={setInput0Certain}></input>
                </div>
                <div>
                    <input className={styles.letterInput} maxLength="1" name='input1' type="text" value={input1} onChange={e => setInput1(e.target.value)}></input>
                    <input className={styles.letterInput} name='isInput1Certain' type="checkbox" value={isInput1Certain} onChange={setInput1Certain}></input>
                </div>
                <div>
                    <input className={styles.letterInput} maxLength="1" name='input2' type="text" value={input2} onChange={e => setInput2(e.target.value)}></input>
                    <input className={styles.letterInput} name='isInput2Certain' type="checkbox" value={isInput2Certain} onChange={setInput2Certain}></input>
                </div>
                <div>
                    <input className={styles.letterInput} maxLength="1" name='input3' type="text" value={input3} onChange={e => setInput3(e.target.value)}></input>
                    <input className={styles.letterInput} name='isInput3Certain' type="checkbox" value={isInput3Certain} onChange={setInput3Certain}></input>
                </div>
                <div>
                    <input className={styles.letterInput} maxLength="1" name='input4' type="text" value={input4} onChange={e => setInput4(e.target.value)}></input>
                    <input className={styles.letterInput} name='isInput4Certain' type="checkbox" value={isInput4Certain} onChange={setInput4Certain}></input>
                </div>

            </div>
        </div>
    )
}

export default CorrectLetters