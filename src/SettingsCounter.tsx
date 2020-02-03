import React from 'react';
import SettingsScreen from './SettingsScreen';
import SettingsBtnsBlock from './settingsBtnsBlock'
import './App.css';

interface IProps {
   currentDisplaySettings: boolean
    minValue: number
    onMinValue: (onMinValue: any) => void
    maxValue: number
    onMaxValue: (onMaxValue: any) => void
    onClickCounterValue: (onClickCounterValue: any) => void
    errorMax: boolean
    errorMin: boolean
    set: string
    onSet: (onSet: any) => void
    isButtonSet: boolean

}

class SettingsCounter extends React.Component <IProps> {

    render = () => {

        let classForWrapperSettingsCounter = this.props.currentDisplaySettings ? 'wrapperSettingsCounter currentDisplay' : 'wrapperSettingsCounter';
        return (
            <div className={classForWrapperSettingsCounter}>
                <SettingsScreen minValue={this.props.minValue}
                                onMinValue={this.props.onMinValue}
                                maxValue={this.props.maxValue}
                                onMaxValue={this.props.onMaxValue}
                                onClickCounterValue={this.props.onClickCounterValue}
                                errorMax={this.props.errorMax}
                                errorMin={this.props.errorMin}
                />
                <SettingsBtnsBlock set={this.props.set}
                                   // inc={this.props.inc}
                                   // reset={this.props.reset}
                                   // counterSet={this.props.counterSet}
                                   onSet={this.props.onSet}
                                   isButtonSet={this.props.isButtonSet}
                                   // onInc={this.props.onInc}
                                   // onReset={this.props.onReset}
                                   // onSetCounter={this.props.onSetCounter}
                                   // isButtonInc={this.props.isButtonInc}
                                   // isButtonReset={this.props.isButtonReset}
                                   // isCounterSet={this.props.isCounterSet}
                />
            </div>
        );
    }
}

export default SettingsCounter;

