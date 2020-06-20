# react-selector-multiple

![multiple_select](https://user-images.githubusercontent.com/44566371/85183933-622a4f80-b296-11ea-9d29-41c54e744af1.gif)

## Installation
`npm install --save react-selector-multiple`

## Prop Types
|Prop|Type|Description|
|---|---|---|
|options|arrayOf(string)|all option you want to show|
|selectedValues|arrayOf(string)|need to set here the selected values|
|onChange|func|event that return the selected|
|style|oneOfType(object, array)|set different style to select tag|
|selectedOptionStyle|oneOfType(object, array)|set different style to selected options|
|placeHolder|string|change the place holder|
|selectedPlaceHolder|func|allow to change the default string after select any item,can see in [`Example Code`](https://github.com/AlmogBakhshi/react-selector-multiple#example-code)|
|selectAllOptions|bool|add select all option|

## Example Code
```
import React, { useState } from 'react';
import MultipleSelect from 'react-selector-multiple';

const App = () => {
  const options = ['Red', 'Green', 'Blue', 'Yellow'];

  const [values, setValues] = useState([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <MultipleSelect
        options={options}
        selectedValues={values}
        onChange={e => setValues(e)}
        style={{ width: '30%', borderRadius: '5px', outline: 'none' }}
      />

      <MultipleSelect
        options={options}
        selectedValues={values}
        onChange={e => setValues(e)}
        style={{ marginTop: '50px', width: '30%', borderRadius: '5px', outline: 'none' }}
        selectedOptionStyle={{ color: '#dc143c' }}
        placeHolder='Multiple Select'
        selectedPlaceHolder={e => e.map((val, index) => e.length - 1 === index ? val : `${val}, `)}
        selectAllOptions
      />
    </div>
  );
}

export default App;
```
