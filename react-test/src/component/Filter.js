import React from 'react'

export default function Filter({value, onChangeFilter}) {
    return (
        <div>
            <input type="text"
            value= {value}
            onChange= {e => onChangeFilter(e.target.value)}
            />
        </div>
    )
}
