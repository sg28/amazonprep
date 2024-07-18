import React, { useEffect, useState } from "react";

function useIsAdult(age){

    let[isAdult, setIsAdult] = useState(false);

    useEffect(()=>{
        setIsAdult(age > 18);
        return ()=>{
            console.log('garbage collect ')
        }
    },[age])

    return isAdult;
}

export default useIsAdult;