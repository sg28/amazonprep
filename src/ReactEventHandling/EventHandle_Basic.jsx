import React, {useEffect} from 'react';
import useIsAdult from '../CustomHooks/IsAdult'
const event_btn_1_style = {
    backgroundColor: 'lightgrey',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer'
};

// Parent component
function EventBasic(){
    let isAdult = useIsAdult(18);
    console.log('isAdult 1 ', isAdult)
    // custom functions
    function eventClicked_fn(){
        console.log(' parent fn, eventClicked_fn')
    }

    //component return
    return (
        <div> 
             <h5> Event Baiscs </h5>
             <Button
             eventClicked_fn={eventClicked_fn}
             />
        </div>
    )
}


// Button  component
function Button(props){
    let isAdult = useIsAdult(19);
    console.log('isAdult 2 ', isAdult)
    let {eventClicked_fn} = props;
    
    /*  custom function with global scope this
        The 'this' here refers to the global scope.
    */
    function event_btn_1_fn(){
        console.log(' event btn clicked 2 ')
        eventClicked_fn()
    }


    
    /*  custom function with lexical scope this
        The 'this' here refers to the lexical scope
    */ 
    let event_ =()=>{
        console.log('event_')
    }

    //component return
    return (
        <div>
            <button 
            className='event_btn_1' 
            style={event_btn_1_style}
            onClick={event_btn_1_fn} /* {eventClicked_fn} can also directly call parent Fn*/ 
            > CLICK </button>
        </div>
    )
}


export default EventBasic;