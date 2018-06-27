import React from 'react';
import { Control } from 'react-redux-form';

const FilteredSelect = ({ options, filter }) => {
    console.info(options, filter);

    const filteredOptions = options.filter(item => item.group === filter);

    return (<Control.select model="select">
        <option value="">Please Select</option>
        {filteredOptions && filteredOptions.map(item => (
            <option key={item.value} value={item.value}>{item.desc}</option>
        ))}
    </Control.select>);
}

export default FilteredSelect;
