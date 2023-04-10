import React, { useContext } from 'react'
import B from './B'
import { MyContext } from '..';

export default function A() {
    //2.1 Hooks Area
    const myinfo1 = useContext(MyContext);

    //2.2 Function Defination area


    //2.3 Return statement
    return (
        <>
            <h1>A Component {myinfo1.surname}</h1>
            <B></B>
        </>
    )
}
