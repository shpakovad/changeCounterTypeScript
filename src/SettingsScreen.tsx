import React from 'react';
import './App.css';
interface IProps {
    errorMax: boolean
    errorMin: boolean
    maxValue: number
    onMaxValue: (onMaxValue: any) => void
    onClickCounterValue: (onClickCounterValue: any) => void
    minValue: number
    onMinValue: (onMinValue: any) => void

}

class SettingsScreen extends React.Component <IProps> {

    render = () => {
        let classIncorrectMaxValueInput = this.props.errorMax ? 'maxValue error' : 'maxValue';
        let classIncorrectMinValueInput =this.props.errorMin ? 'minValue error' : 'minValue';
        return (
            <div className='settingsScreen'>
                <span className='maxValueString'> <em> max value: </em></span>
                <input className={classIncorrectMaxValueInput} type="number"
                       value={ this.props.maxValue}
                       onChange={this.props.onMaxValue}
                       onClick={this.props.onClickCounterValue}
                       // errorMax={ this.props.errorMax}
                />
                <span className='minValueString'> <em> min value: </em></span>
                <input className={classIncorrectMinValueInput} type="number"
                       value={ this.props.minValue}
                       onChange={this.props.onMinValue}
                       onClick={this.props.onClickCounterValue}
                        // errorMin={ this.props.errorMin}
                />
            </div>
        );
    }
}

export default SettingsScreen;

