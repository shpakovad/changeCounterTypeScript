import React from 'react';
import './App.css';

interface IProps {
    counter: any
    numberNewColor: boolean
    errorMax: boolean
    errorMin: boolean
}

class Screen extends React.Component <IProps> {

    render = () => {
        let classForNumber = this.props.numberNewColor ? 'numberNewColor' : ((this.props.errorMax) || (this.props.errorMin)) ? 'errorText' : 'number'
        return (
            <div className='screen'>
                <div className={classForNumber}
                     // counter={this.props.counter}
                     // numberNewColor={this.props.numberNewColor}
                > {this.props.counter}
                </div>
            </div>
        );
    }
}

export default Screen;
