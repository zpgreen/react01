import React from 'react'

function Hello({ isSpeacial, firstNm, name, color }) {
    // const name = "이름";
    const style = {
        backgroundColor: "yellow",
        fontSize: "24px",
        padding: "1rem",
        color: "aqua"
    }
    return (
        <>
            <div style={{ color: color }}>Hello</div>
            {isSpeacial && <div style={style}>{firstNm} 인 {name} </div>}
            <div className='gray-box'></div>
        </>
    )
}
Hello.defaultProps = {
    name: '이름없음'
}
export default Hello