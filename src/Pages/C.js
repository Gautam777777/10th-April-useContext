import React, { useContext } from 'react'
import Z from './Z'
import { MyContext } from '..';

export default function C() {
    //2.1 Hooks Area
    const myinfo3 = useContext(MyContext);

    //2.2 Function Defination area


    //2.3 Return statement
    return (
        <>
            <h1>C Component {myinfo3.name} {myinfo3.surname} {myinfo3.mobno}</h1>
            <Z></Z>
        </>
    )
}
