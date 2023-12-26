import React, { useState } from 'react'
import Custom from './Custom'
const Storage = () => {
    const [word,setWord] = useState("")

  return (
    <div>
        <h3>INPUT</h3>
        <input type="text" onChange={(e) => {
            setWord(e.target.value)
        }}/>
        <Custom word = {word}/>

    </div>
  )
}

export default Storage