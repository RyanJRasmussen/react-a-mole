import { useEffect } from "react"
import MoleHill from '../images/molehill.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 4000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randomSeconds)
        //cleanup
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHill} />
        </div>
    )
}

export default EmptySlot