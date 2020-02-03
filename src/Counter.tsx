import React from 'react';
import './App.css';
import Screen from './Screen';
import BtnsBlock from './BtnsBlock';

interface IProps {
    currentDisplay: boolean
    counter: any
    numberNewColor: boolean
    errorMax: boolean
    errorMin: boolean
    inc: string
    reset: string
    onInc: (onInc: any) => void
    onReset: (onReset: any) => void
    isButtonInc: boolean
    isButtonReset: boolean
    counterSet: string
    isCounterSet: any
    onSetCounter: (onSetCounter: any) => void
    // set: string
    // onSet: (onSet: any) => void
    // isButtonSet: boolean
}

class Counter extends React.Component <IProps> {

    render = () => {
        let classForWrapperCounter = this.props.currentDisplay ? 'wrapperCounter currentDisplay' : 'wrapperCounter';
        return (
            <div className={classForWrapperCounter}>
                <Screen counter={this.props.counter}
                        numberNewColor={this.props.numberNewColor}
                        errorMax={this.props.errorMax}
                        errorMin={this.props.errorMin}
                />
                <BtnsBlock reset={this.props.reset}
                           // set={this.props.set}
                           inc={this.props.inc}
                           onInc={this.props.onInc}
                           // onSet={this.props.onSet}
                           onReset={this.props.onReset}
                           isButtonInc={this.props.isButtonInc}
                           // isButtonSet={this.props.isButtonSet}
                     // counter={this.props.counter}
                           isButtonReset={this.props.isButtonReset}
                           counterSet={this.props.counterSet}
                           onSetCounter={this.props.onSetCounter}
                           isCounterSet={this.props.isCounterSet}
                />
            </div>
        );
    }
}

export default Counter;

