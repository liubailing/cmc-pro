import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'dva'


function Stopwatch() {
    const [lapse, setLapse] = React.useState(0)
    const [running, setRunning] = React.useState(false)

    React.useEffect(() => {
        if (running) {
            const startTime = Date.now() - lapse
            const intervalId = setInterval(() => {
                setLapse(Date.now() - startTime)
            }, 0)
            return () => {
                clearInterval(intervalId)
            }
        }
    }, [running])

    function handleRunClick() {
        setRunning(r => !r)
    }

    function handleClearClick() {
        setRunning(false)
        setLapse(0)
    }

    if (!running) console.log('running is false')

    return (
        <div>
            <label >{lapse}ms</label>
            <button onClick={handleRunClick} >
                {running ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleClearClick} >
                Clear
      </button>
        </div>
    )
}


const Test = () => {

    const [show, setShow] = React.useState(true)

    return <div style={{ textAlign: 'center' }}>
        <label>
            <input
                checked={show}
                type="checkbox"
                onChange={e => setShow(e.target.checked)}
            />{' '}
            Show stopwatch
      </label>
        {show ? <Stopwatch /> : null}
    </div>


}

export default connect()(Test);