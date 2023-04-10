import React, { useContext } from 'react'
import { MyContext } from '..';

export default function Z() {
    //2.1 Hooks Area
    const myinfo4 = useContext(MyContext);

    //2.2 Function Defination area


    //2.3 Return statement
    return (
        <>
            {console.log("myinfo --->",myinfo4)}
            <h1>Z Component {myinfo4.name}</h1>
        </>
    )
}
