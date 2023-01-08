import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const LoadSpinner = () => {
  const style = {position: "fixed", top: "50%", left:"50%", transform: "translate(-50%,-50%)"}
  return (
    <div style = {style}>
    <HashLoader color="#F8FAFD" size = {200} />
    
  
    </div>
    
  )
}

export default LoadSpinner