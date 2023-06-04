import React from "react";
import css from './Filter.module.css';

const Filter = ({value, onChange }) =>{
    return (
        <>
            <h2 className={css.FilterH}> Find contacts by name </h2>
            <label>
                <input type="text" value={value} onChange={onChange} className={css.FilterInput} />
            </label>
        </>
    )
}
export default Filter;