import React, { useState } from 'react'

const Test = () => {

    const [val, setVal] = useState([])
    const [inputData, setInputData] = useState("")

    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }

    const handleDelete = (i) => {
        const deleteVal = [...val]
        deleteVal.splice(i, 1)
        setVal(deleteVal)
    }

    console.log(val)
  return (
    <div>
      <button onClick={handleAdd}>add more</button>
        {val.map((data, i) => {
          return(
            <div>
              <input value={data} />
              <button onClick={() => handleDelete(i)}>Delete</button>
            </div>
          )
        })}
      </div>
  )
}

export default Test;