import {React, useState} from 'react'
import Show from '../Util/show'

const Card = () => {
    const [show,setShow] = useState(Show);
    return (
    <div className="container-card">
        <div className="show-card">
            {show.map((show)=>{
                const {id, title,img,description,rating} = show;
                return (
                    <div className="card"key={id}>
                       <img src={img} alt=''></img>
                       <h2>{title}</h2>
                       <hr/>
                       <p>{description}</p>
                       <p className='rates'>Rating: {rating}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Card