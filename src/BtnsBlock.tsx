import React from 'react';
import './App.css';


interface IProps {
    inc: string
    reset: string
    onInc: (onInc: any) => void
    onReset: (onReset: any) => void
    counterSet: string
    onSetCounter: (onSetCounter: any) => void
    isButtonInc: boolean
    isButtonReset: boolean
    isCounterSet: any
}

class BtnsBlock extends React.Component <IProps> {

    render = () => {
        return (
            <div className='wrapperBtn'>
                <div className='btns'>
                    <button className='inc disabled' onClick={this.props.onInc}
                            disabled={this.props.isButtonInc}> {this.props.inc} </button>
                    <button className='reset' onClick={this.props.onReset}
                            disabled={this.props.isButtonReset}> {this.props.reset} </button>
                    <button className='setCounter' onClick={this.props.onSetCounter}
                            disabled={this.props.isCounterSet}> {this.props.counterSet}   </button>
                </div>
            </div>
        );
    }
}

export default BtnsBlock;

