import React, {ChangeEvent} from 'react';
import './App.css';
import SettingsCounter from './SettingsCounter';
import Counter from './Counter';
import {connect} from "react-redux";
import {
    counterSetAC,
    currentDisplaySetAC, currentDisplaySettingsSetAC, errorMaxSetAC, errorMinSetAC,
    isButtonIncSetAC, isButtonResetSetAC, isButtonValueSetAC, isCounterValueSetAC,
    maxValueSetAC,
    minValueSetAC,
    numberNewColorSetAC,
    OnIncAC,
    onResetAC, onSetAC
} from "./redux/redux";
import {Dispatch} from "redux";
import {IState} from "./types/types";

interface IProps {
    state: IState
}

interface IMapStateToProps {
    maxValue: number,
    minValue: number,
    counter: any,
    isButtonInc: boolean,
    numberNewColor: boolean,
    errorMax: boolean,
    errorMin: boolean,
    isButtonSet: boolean,
    isButtonReset: boolean,
    currentDisplaySettings: boolean,
    currentDisplay: boolean,
    isCounterSet: any
}

let mstp = (state: any): IMapStateToProps => ({
    maxValue: state.maxValue,
    minValue: state.minValue,
    counter: state.counter,
    isButtonInc: state.isButtonInc,
    numberNewColor: state.numberNewColor,
    errorMax: state.errorMax,
    errorMin: state.errorMin,
    isButtonSet: state.isButtonSet,
    isButtonReset: state.isButtonReset,
    currentDisplaySettings: state.currentDisplaySettings,
    currentDisplay: state.currentDisplay,
    isCounterSet: state.isCounterSet
});

interface IMapDispatchToProps {
    OnInc: (counter: any) => void
    isButtonIncSet: (isButtonInc: boolean) => void
    numberNewColorSet: (numberNewColor: boolean) => void
    onReset: (minValue: number) => void
    minValueSet: (minValue: number) => void
    maxValueSet: (maxValue: number) => void
    isButtonResetSet: (isButtonReset: boolean) => void
    onSet: (newMinValue: number) => void
    isCounterValueSet: (isCounterSet: any) => void
    currentDisplaySettingsSet: (currentDisplaySettings: boolean) => void
    currentDisplaySet: (currentDisplay: boolean) => void
    errorMinSet: (errorMin: boolean) => void
    errorMaxSet: (errorMax: boolean) => void
    counterSet: (counter: boolean) => void
    isButtonValueSet: (isButtonSet: boolean) => void

}

let mdtp = (dispatch: Dispatch): IMapDispatchToProps => ({
    OnInc: (counter: any) => {
        dispatch(OnIncAC(counter))
    },
    isButtonIncSet: (isButtonInc: boolean) => {
        dispatch(isButtonIncSetAC(isButtonInc))
    },
    numberNewColorSet: (numberNewColor: boolean) => {
        dispatch(numberNewColorSetAC(numberNewColor))
    },
    onReset: (minValue: number) => {
        dispatch(onResetAC(minValue))
    },
    minValueSet: (minValue: number) => {
        dispatch(minValueSetAC(minValue))
    },
    maxValueSet: (maxValue: number) => {
        dispatch(maxValueSetAC(maxValue))
    },
    isButtonResetSet: (isButtonReset: boolean) => {
        dispatch(isButtonResetSetAC(isButtonReset))
    },
    onSet: (newMinValue: number) => {
        dispatch(onSetAC(newMinValue))
    },
    isCounterValueSet: (isCounterSet: any) => {
        dispatch(isCounterValueSetAC(isCounterSet))
    },
    currentDisplaySettingsSet: (currentDisplaySettings: boolean) => {
        dispatch(currentDisplaySettingsSetAC(currentDisplaySettings))
    },
    currentDisplaySet: (currentDisplay: boolean) => {
        dispatch(currentDisplaySetAC(currentDisplay))
    },
    errorMinSet: (errorMin: boolean) => {
        dispatch(errorMinSetAC(errorMin))
    },
    errorMaxSet: (errorMax: boolean) => {
        dispatch(errorMaxSetAC(errorMax))
    },
    counterSet: (counter: any) => {
        dispatch(counterSetAC(counter))
    },
    isButtonValueSet: (isButtonSet: boolean) => {
        dispatch(isButtonValueSetAC(isButtonSet))
    },

});

export interface IBtns {
    reset: string
    inc: string
    set: string
    counterSet: string
}

const App = (props: IProps & IMapStateToProps & IMapDispatchToProps) => {

    let btns: IBtns = {reset: "reset", inc: "inc", set: "set", counterSet: 'setVal'};

    //при достижении макс знач-я кнопка inc блокируется

    let onInc = () => {
        props.OnInc(props.counter);
        if (props.counter === props.maxValue - 1) {
            props.isButtonResetSet(false);
            props.isButtonIncSet(true);
            props.numberNewColorSet(true)
        }
    };

    //сбрасывает при достижении макс значения
    let onReset = () => {
        props.onReset(props.minValue);
        props.isButtonIncSet(false);
        props.numberNewColorSet(false);
        props.isButtonResetSet(true);
    };

    //событие с мин и макс значениями
    let onMinValue = (e: ChangeEvent<HTMLInputElement>): void => {
        let setMinValue = Number(e.target.value);
        props.minValueSet(setMinValue)
    };
    let onMaxValue = (e: ChangeEvent<HTMLInputElement>): void => {
        let setMaxValue = Number(e.target.value);
        props.maxValueSet(setMaxValue)
    };
    //при клике на set значение выбранного мин значения перебрасывается на screen

    let onSet = () => {
        let newMinValue: number = props.minValue;
        props.onSet(newMinValue);
        props.isButtonIncSet(false);
        props.isButtonResetSet(true);
        props.isCounterValueSet(false);
        props.currentDisplaySettingsSet(true);
        props.currentDisplaySet(false)
    };

    //меняется значение сетчика, в том числе при некорректном вводе. Так же блокируются кновки inc,reset
    let onClickCounterValue = () => {
        props.isCounterValueSet("Enter value and press 'Set'");
        props.errorMaxSet(false);
        props.errorMinSet(false);
        props.isButtonValueSet(false);
        props.isButtonIncSet(true);
        props.isButtonResetSet(true);
        props.isCounterValueSet(true);

        if (props.maxValue <= -1) {
            props.isCounterValueSet("Incorrect Value!");
            props.errorMaxSet(true);
            props.errorMinSet(false);
            props.isButtonValueSet(true)
        }

        if (props.minValue <= -1) {
            props.isCounterValueSet("Incorrect Value!");
            props.errorMaxSet(false);
            props.errorMinSet(true);
            props.isButtonValueSet(true)
        }

        if (props.minValue >= props.maxValue) {
            props.isCounterValueSet("Incorrect Value!");
            props.errorMaxSet(true);
            props.errorMinSet(true);
            props.isButtonValueSet(true)
        }
    };

    let onSetCounter = () => {
        props.currentDisplaySettingsSet(false);
        props.currentDisplaySet(true)
    };

    return (
        <div className="App">

            <SettingsCounter set={btns.set}
                             onSet={onSet}
                             minValue={props.minValue}
                             onMinValue={onMinValue}
                             maxValue={props.maxValue}
                             onMaxValue={onMaxValue}
                             onClickCounterValue={onClickCounterValue}
                             errorMax={props.errorMax}
                             errorMin={props.errorMin}
                             isButtonSet={props.isButtonSet}
                             currentDisplaySettings={props.currentDisplaySettings}
            />
            <Counter counter={props.counter}
                     reset={btns.reset}
                     inc={btns.inc}
                     onInc={onInc}
                     onReset={onReset}
                     isButtonInc={props.isButtonInc}
                     numberNewColor={props.numberNewColor}
                     errorMax={props.errorMax}
                     errorMin={props.errorMin}
                     isButtonReset={props.isButtonReset}
                     counterSet={btns.counterSet}
                     onSetCounter={onSetCounter}
                     isCounterSet={props.isCounterSet}
                     currentDisplay={props.currentDisplay}
            />
        </div>
    );
};

export default connect(mstp, mdtp)(App)

