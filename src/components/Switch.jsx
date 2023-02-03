import React from 'react';
import '../assests/style.css'

const Switch = ({ isOn, handleToggle, onColor }) => {
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox h-0 w-0 hidden"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && onColor }}
                className="react-switch-label flex items-center justify-between cursor-pointer w-[50px] h-[25px] bg-gray-500 rounded-full relative "
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </>
    );
};

export default Switch;