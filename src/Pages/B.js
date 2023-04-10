import React, { useContext } from 'react'
import C from './C'
import { MyContext } from '..';

export default function B() {
    //2.1 Hooks Area
    const myinfo2 = useContext(MyContext);

    //2.2 Function Defination area


    //2.3 Return statement
    return (
        <>
            <h1>B Component {myinfo2.mobno}</h1>
            <C></C>
        </>
    )
}
