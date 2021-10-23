import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleDarktoLight } from '../../store/actions/actions';
import { SpanStyled, SwitchButtonStyled } from './style';

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
        </>
    );
}

export default Switchdark;
