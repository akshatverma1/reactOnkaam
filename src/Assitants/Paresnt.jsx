import React, { useState } from 'react';
import Childdd from './Child';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ParentComponent(){
    const id ="akshat";
    const navigate =useNavigate();

    function go(){
        navigate("/child",{state :{id}});
    }
    return (
        <div>
            
            <button onClick={go}>submit</button>
        </div>
    )
}