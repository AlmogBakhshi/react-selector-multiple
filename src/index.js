import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Select = (props) => {
    const [values, setValues] = useState((props.selectedValues && props.selectedValues.length > 0 && props.selectedValues) || []);
    const [options] = useState((props.options && props.options.length > 0 && props.options) || []);
    const [placeHolder] = useState(props.placeHolder || 'Please Choose...');

    const HandleChange = (e) => {
        const targetValue = JSON.parse(e.target.value);
        const arrayNotOfObjects = options.some(option => !option.value || !option.name);

        let allOptions = options;
        !arrayNotOfObjects && (allOptions = options.map(option => option.value));

        const filtered = targetValue === 'react-selector-multiple-select-all' ?
            (values.length === allOptions.length ? [] : allOptions) :
            (!values.some(val => JSON.stringify(val) === JSON.stringify(targetValue)) ?
                [...values, targetValue] :
                values.filter(item => JSON.stringify(item) !== JSON.stringify(targetValue)));

        setValues(filtered);

        props.onChange(filtered);
    }

    const HandleSelectedPlaceHolder = () => {
        return (props.selectedPlaceHolder && props.selectedPlaceHolder(values)) || `${values.length} item selected`;
    }

    const HandleShowOption = () => {
        if (options && Array.isArray(options) && options.length > 0) {
            const arrayNotOfObjects = options.some(option => !option.value || !option.name);

            return options.map((option, index) => {
                const optionValue = JSON.stringify(arrayNotOfObjects ? option : option.value);
                return <option key={index} value={optionValue}
                    className={values.some(val => JSON.stringify(val) === optionValue) ? 'selectedOption' : ''}
                    style={values.some(val => JSON.stringify(val) === optionValue) ? props.selectedOptionStyle : {}} >
                    {arrayNotOfObjects ? option : option.name}</option>
            });
        }
    }

    return (
        <select value='react-selector-multiple' className='select' onChange={HandleChange} style={props.style} >
            <option value='react-selector-multiple' disabled hidden>
                {values && values.length > 0 ? HandleSelectedPlaceHolder() : placeHolder}
            </option>
            {props.selectAllOptions && <option value={JSON.stringify('react-selector-multiple-select-all')}>
                Select All
            </option>}
            <HandleShowOption />
        </select>
    )
}

Select.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    placeHolder: PropTypes.string,
    selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
    selectedOptionStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    selectedPlaceHolder: PropTypes.func,
    selectAllOptions: PropTypes.bool,
}

export default Select;