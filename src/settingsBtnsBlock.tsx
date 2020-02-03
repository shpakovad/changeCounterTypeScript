import React from 'react';
import './App.css';

interface IProps {
    onSet: (onSet: any) => void
    isButtonSet: boolean
    set: string
}

class SettingsBtnsBlock extends React.Component <IProps> {

    render = () => {

        return (
            <div className='wrapperBtn'>
                <div className='btns'>

                    <button className='set' onClick={this.props.onSet}
                            disabled={this.props.isButtonSet}> {this.props.set}   </button>
                </div>
            </div>
        );
    }
}

export default SettingsBtnsBlock;

