import React from 'react'
import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props) {
    let [showMole, setShowMole] = useState(false)

    function handleClick(){
        props.setScore(props.score + 1)
        setShowMole(false)
    }

    let displayMole = showMole ? <Mole setScore={props.setScore} toggle={setShowMole} handleClick={handleClick} /> : <EmptySlot toggle={setShowMole} />



    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}
export default MoleContainer;