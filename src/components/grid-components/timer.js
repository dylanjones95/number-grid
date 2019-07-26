import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import Result from "./result.js"

export default class Timer extends Component {
    state = {
        minutes: 1,
        seconds: 30,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div>
                {  this.props.currentNumber === -1
                    ? <p>Score: 0</p>
                    : <p>Score: {this.props.currentNumber}</p>
                }
                { minutes === 0 && seconds === 0
                    ? < Redirect id="result" to="/grid/result" component={Result} />
                    : <p>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
                }


            </div>
        )
    }
}