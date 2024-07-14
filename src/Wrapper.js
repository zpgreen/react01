import React from 'react'

function Wrapper({ children }) {
    const style = {
        border: "solid 2px green",
        margin: "20px",
        padding: "2rem"
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper