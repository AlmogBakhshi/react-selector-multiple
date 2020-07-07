# react-selector-multiple

![multiple_select](https://user-images.githubusercontent.com/44566371/85183933-622a4f80-b296-11ea-9d29-41c54e744af1.gif)

## Installation
`npm install --save react-selector-multiple`

This library using react hooks.
Note that to enable Hooks, all React packages need to be 16.8.0 or higher.

## Prop Types
|Prop|Type|Description|
|---|---|---|
|options|arrayOf(object / string)|all option you want to show, if you want array of objects, the object should look like this `{value: string / object, name: string}`|
|selectedValues|arrayOf(object / string)|need to set here the selected values, if the option is array of objects you get the value|
|onChange|func|event that return the selected, also here if the option is array of objects you get the value|
|style|oneOfType(object, array)|set different style to select tag|
|selectedOptionStyle|oneOfType(object, array)|set different style to selected options|
|placeHolder|string|change the place holder|
|selectedPlaceHolder|func|allow to change the default string after select any item,can see in [`Example Code`](https://github.com/AlmogBakhshi/react-selector-multiple#example-code)|
|selectAllOptions|bool|add select all option|

## Example Code
[demo](https://almogbakhshi.github.io/#/react-selector-multiple)
```
import React, { useState } from 'react';
import MultipleSelect from 'react-selector-multiple';

const App = () => {
  const [values_1, setValues_1] = useState([]);
  const [values_2, setValues_2] = useState([]);
  const [values_3, setValues_3] = useState([]);

  const options_1 = [
    'Red',
    'Green',
    'Blue',
    'Yellow'
  ];

  const options_2 = [
    { value: 'Red', name: 'Red' },
    { value: 'Green', name: 'Green' },
    { value: 'Blue', name: 'Blue' },
    { value: 'Yellow', name: 'Yellow' }
  ];

  const options_3 = [
    { value: { id: 1 }, name: 'Red' },
    { value: { id: 2, value: 'green' }, name: 'Green' },
    { value: { id: 3, value: 'blue' }, name: 'Blue' },
    { value: { id: 4, value: 'yellow' }, name: 'Yellow' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <h4>options_1 array of strings:</h4>
        <MultipleSelect
          options={options_1}
          selectedValues={values_1}
          onChange={e => setValues_1(e)}
          style={{ borderRadius: '5px', outline: 'none' }}
        />
      </div>

      <div>
        <h4>options_2 array of objects, the value is string:</h4>
        <MultipleSelect
          options={options_2}
          selectedValues={values_2}
          onChange={e => setValues_2(e)}
          style={{ borderRadius: '5px', outline: 'none' }}
          selectedOptionStyle={{ color: '#dc143c' }}
          placeHolder='Multiple Select'
          selectedPlaceHolder={e => e.map((val, index) => e.length - 1 === index ? val : `${val}, `)}
          selectAllOptions
        />
      </div>

      <div>
        <h4>options_3 array of objects, the value is object:</h4>
        <MultipleSelect
          options={options_3}
          selectedValues={values_3}
          onChange={e => setValues_3(e)}
          style={{ borderRadius: '5px', outline: 'none' }}
          selectedOptionStyle={{ color: '#dc143c' }}
          placeHolder='Multiple Select'
          selectedPlaceHolder={e => e.map((val, index) => e.length - 1 === index ? val.value ? val.value : val.id :
            `${val.value ? val.value : val.id}, `)}
          selectAllOptions
        />
      </div>
    </div>
  );
}

export default App;
```
