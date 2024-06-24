import {React, useState} from 'react'
import Card from '../Components/Card'
import Show from '../Util/show'

const Home = () => {
  const [show,setShow] = useState(Show);
  return (
    <div className="container-home">
      <h1>TELEVISION SHOW RANKER</h1>
      <hr/>
      <Card/>
    </div>
  )
}

export default Home