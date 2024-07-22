import React, { useState } from 'react'

function InputSample() {
    const [text, setText] = useState({
        name: '',
        nickname: ''
    });
    const { name, nickname } = text;
    const onChange = (e) => {
        const { name, nickname } = e.target
        setText({
            ...text,
            [name]: e.target.value
        });
    }
    const onReset = () => {
        setText('');
    }
    return (
        <div>
            <input placeholder='이름' name='name' onChange={onChange} value={name} />
            <input placeholder='닉네임' name='nickname' onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>이름 : {name} - 닉네임 : {nickname}</div>
        </div>
    )
}

export default InputSample