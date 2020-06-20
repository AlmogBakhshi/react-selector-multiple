import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Select = (props) => {
    const [values, setValues] = useState((props.selectedValues && props.selectedValues.length > 0 && props.selectedValues) || []);
    const [options] = useState((props.options && props.options.length > 0 && props.options) || []);
    const [placeHolder] = useState(props.placeHolder || 'Please Choose...');

    const HandleChange = (e) => {
        const targetValue = e.target.value;
        const filtered = targetValue === 'react-selector-multiple-select-all' ?
            (values === options ? [] : options) :
            (!values.includes(targetValue) ?
                [...values, targetValue] :
                values.filter(item => item !== targetValue));

        setValues(filtered);

        props.onChange(filtered);
    }

    const HandleSelectedPlaceHolder = () => {
        return (props.selectedPlaceHolder && props.selectedPlaceHolder(values)) || `${values.length} item selected`;
    }

    return (
        <select value='react-selector-multiple' className='select' onChange={HandleChange} style={props.style} >
            <option value='react-selector-multiple' disabled hidden>
                {values && values.length > 0 ? HandleSelectedPlaceHolder() : placeHolder}
            </option>
            {props.selectAllOptions && <option value='react-selector-multiple-select-all'>
                Select All
            </option>}
            {options && options.length > 0 && options.map((option, index) =>
                <option key={index} value={option} className={values.includes(option) ? 'selectedOption' : ''}
                    style={values.includes(option) ? props.selectedOptionStyle : {}} >{option}</option>)}
        </select>
    )
}

Select.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    placeHolder: PropTypes.string,
    selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedOptionStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    selectedPlaceHolder: PropTypes.func,
    selectAllOptions: PropTypes.bool,
}

export default Select;