import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleDarktoLight } from '../../store/actions/actions';
import { SpanStyled, SwitchButtonStyled } from './style';
import Switch from '@mui/material/Switch';

const Switchdark = () => {
    
    const toggleState = useSelector(state => state.turnOffOrOn.on)
    const dispatch = useDispatch()

    function handleChange() {
        dispatch(toggleDarktoLight())
    }


    return (
        <>            
            <SwitchButtonStyled onClick={handleChange} toggleState={toggleState}>
                <div></div>
            </SwitchButtonStyled>
            <SpanStyled toggleState={toggleState}>
                {toggleState ? "Light":"Dark"}
            </SpanStyled >
            <br />
            <Switch defaultChecked/>       
        </>
    );
}

export default Switchdark;
