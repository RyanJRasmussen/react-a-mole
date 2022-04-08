import {useEffect} from 'react'
import moleImg from '../images/mole.png'

function Mole(props){
    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 4000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleImg}
            onClick={props.handleClick} />
        </div>
    )
}

export default Mole;
