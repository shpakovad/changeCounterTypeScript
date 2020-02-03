export const COUNTER = 'COUNTER';
export const BOTTON_INC = 'BOTTON-INC';
export const NEW_COLOR = 'NEW-COLOR';
export const ON_RESET = 'ON-RESET';
export const MIN_VALUE = 'MIN-VALUE';
export const MAX_VALUE = 'MAX-VALUE';
export const ON_SET = 'ON-SET';
export const BUTTON_RESET = 'BUTTON-RESET';
export const COUNTER_SET = 'COUNTER-SET';
export const DISPLAY_SETTINGS = 'DISPLAY-SETTINGS';
export const CURRENT_DISPLAY = 'CURRENT-DISPLAY';
export const ERROR_MAX = 'ERROR-MAX';
export const ERROR_MIN = 'ERROR-MIN';
export const SET_COUNTER = 'SET-COUNTER';
export const BUTTON_SET = 'BUTTON-SET';


let initialState = {
    maxValue: 0,
    minValue: 0,
    counter: "Enter 'SetVal'",
    isButtonInc: true,
    numberNewColor: false,
    errorMax: false,
    errorMin: false,
    isButtonSet: false,
    isButtonReset: true,
    currentDisplaySettings: true,
    currentDisplay: false,
    isCounterSet: false
};

const reducer = (state = initialState, action: ReducerActionsTypes) => {
    switch (action.type) {
        case COUNTER:
            return {
                ...state,
                counter: action.counter + 1
            };
        case BOTTON_INC:
            return {
                ...state,
                isButtonInc: action.isButtonInc
            };
        case NEW_COLOR:
            return {
                ...state,
                numberNewColor: action.numberNewColor
            };
        case ON_RESET:
            return {
                ...state,
                counter: action.minValue
            };
        case MIN_VALUE:
            return {
                ...state,
                minValue: action.minValue
            };
        case MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue
            };
        case ON_SET:
            return {
                ...state,
                counter: action.newMinValue
            };
        case BUTTON_RESET:
            return {
                ...state,
                isButtonReset: action.isButtonReset
            };
        case COUNTER_SET:
            return {
                ...state,
                isCounterSet: action.isCounterSet
            };
        case DISPLAY_SETTINGS:
            return {
                ...state,
                currentDisplaySettings: action.currentDisplaySettings
            };
        case CURRENT_DISPLAY:
            return {
                ...state,
                currentDisplay: action.currentDisplay
            };
        case ERROR_MAX:
            return {
                ...state,
                errorMax: action.errorMax
            };
        case ERROR_MIN:
            return {
                ...state,
                errorMin: action.errorMin
            };
        case SET_COUNTER:
            return {
                ...state,
                counter: action.counter
            };
        case BUTTON_SET:
            return {
                ...state,
                isButtonSet: action.isButtonSet
            };
    }
    return state
};

type ReducerActionsTypes =
    IOnIncAC
    | IisButtonIncSetAC
    | IumberNewColorSetAC
    | IonResetAC
    | IminValueSetAC
    | ImaxValueSetAC
    | IonSetAC
    | IisButtonResetSetAC
    | IisCounterValueSetAC
    | IcurrentDisplaySettingsSetAC
    | IcurrentDisplaySetAC
    | IerrorMinSetAC
    | IerrorMaxSetAC
    | IcounterSetAC
    | IisButtonValueSetAC

interface IOnIncAC {
    type: typeof COUNTER
    counter: any
}

interface IisButtonIncSetAC {
    type: typeof BOTTON_INC
    isButtonInc: boolean
}

interface IumberNewColorSetAC {
    type: typeof NEW_COLOR
    numberNewColor: boolean
}

interface IonResetAC {
    type: typeof ON_RESET
    minValue: number
}

interface IminValueSetAC {
    type: typeof MIN_VALUE
    minValue: number
}

interface ImaxValueSetAC {
    type: typeof MAX_VALUE
    maxValue: number
}

interface IonSetAC {
    type: typeof ON_SET
    newMinValue: number
}

interface IisButtonResetSetAC {
    type: typeof BUTTON_RESET
    isButtonReset: boolean
}

interface IisCounterValueSetAC {
    type: typeof COUNTER_SET
    isCounterSet: any
}

interface IcurrentDisplaySettingsSetAC {
    type: typeof DISPLAY_SETTINGS
    currentDisplaySettings: boolean
}

interface IcurrentDisplaySetAC {
    type: typeof CURRENT_DISPLAY
    currentDisplay: boolean
}

interface IerrorMinSetAC {
    type: typeof ERROR_MIN
    errorMin: boolean
}

interface IerrorMaxSetAC {
    type: typeof ERROR_MAX
    errorMax: boolean
}

interface IcounterSetAC {
    type: typeof SET_COUNTER
    counter: any
}

interface IisButtonValueSetAC {
    type: typeof BUTTON_SET
    isButtonSet: boolean
}


export const OnIncAC = (counter: any): IOnIncAC => {
    return {type: COUNTER, counter}
};
export const isButtonIncSetAC = (isButtonInc: boolean) => {
    return {type: BOTTON_INC, isButtonInc}
};
export const numberNewColorSetAC = (numberNewColor: boolean) => {
    return {type: NEW_COLOR, numberNewColor}
};
export const onResetAC = (minValue: number) => {
    return {type: ON_RESET, minValue}
};
export const minValueSetAC = (minValue: number) => {
    return {type: MIN_VALUE, minValue}
};
export const maxValueSetAC = (maxValue: number) => {
    return {type: MAX_VALUE, maxValue}
};
export const onSetAC = (newMinValue: number) => {
    return {type: ON_SET, newMinValue}
};
export const isButtonResetSetAC = (isButtonReset: boolean) => {
    return {type: BUTTON_RESET, isButtonReset}
};
export const isCounterValueSetAC = (isCounterSet: any) => {
    return {type: COUNTER_SET, isCounterSet}
};
export const currentDisplaySettingsSetAC = (currentDisplaySettings: boolean) => {
    return {type: DISPLAY_SETTINGS, currentDisplaySettings}
};
export const currentDisplaySetAC = (currentDisplay: boolean) => {
    return {type: CURRENT_DISPLAY, currentDisplay}
};
export const errorMinSetAC = (errorMin: boolean) => {
    return {type: ERROR_MIN, errorMin}
};
export const errorMaxSetAC = (errorMax: boolean) => {
    return {type: ERROR_MAX, errorMax}
};
export const counterSetAC = (counter: any) => {
    return {type: SET_COUNTER, counter}
};
export const isButtonValueSetAC = (isButtonSet: boolean) => {
    return {type: BUTTON_SET, isButtonSet}
};


export default reducer