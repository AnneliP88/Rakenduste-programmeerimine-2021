import React from "react"

const Greeting = ({name, age}) => {
  return (
    <>
      <h1>Greeting {name}</h1>
      <p>Greeting text {age}</p>
    </>
  )
}

// Use it only if you have 1 thing to return
// const Greeting = () => <h1>Greeting</h1>

export default Greeting