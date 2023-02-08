import './toggleBtnCss.css'
import './roomCss.css'
import { useEffect, useState } from 'react'

const Room3 = () => {
    const [mode, setMode] = useState(2)
    const [onOff, setOnOff] = useState(0)
    const [level, setLevel] = useState(0)
    const handleChangeMode = (e) => {
        //console.log(e.target.value)
        const dis = document.querySelector("#swap")
        if(e.target.value==="manual"){
            setMode(2)
            dis.removeAttribute('disable');
        }
        else{
            setMode(1)
            dis.setAttribute('disable', '');
        }
    }
    const handleOnOff = () => {
        if(onOff===0){
            setOnOff(1)
        }
        else{
            setOnOff(0)
        }
        console.log(onOff)
    }
    const handleLevel = (e) => {
        if(e.target.value==="100"){
            setLevel(70)
        }
        else if(e.target.value==="200"){
            setLevel(180)
        }
        else if(e.target.value==="300"){
            setLevel(255)
        }
        console.log(level)
    }
    useEffect(()=>{
        //event.preventDefault()
    const payload = {
        "id": 3,
        "mode": mode,
        "status": onOff,
        "light": level
    }

    let status = 0
    
    fetch('http://group4.exceed19.online/update/front', {
    method: 'PUT', // or 'PUT'
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    })
    .then((response) => {
        status = response.status
        return response.json()
    })
    .then((data) => {
        if(status===200){
            console.log(data.detail)
        }
        else if(status===422){
            console.log("Please complete all fields.")
        }
        else{
            console.log(data.detail)
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    }, [mode, onOff, level])
    return(
        <div id="wrapper">
            <h2>LOUNGE</h2>
            <div id="modeDiv">
                <p>Mode</p>
                <div id="radioMode">
                <div><input type="radio" id="manual" name="mode" value="manual" onChange={handleChangeMode}/>
                <label for="manual">manual</label></div>
                <div><input type="radio" id="auto" name="mode" value="auto"onChange={handleChangeMode}/>
                <label for="auto">auto</label></div>
                </div>
            </div>
            <div id="onOffDiv">
                <p>Off</p>
                <label class="switch">
                <input type="checkbox" onChange={handleOnOff} id="swap"/>
                <span class="slider round"></span>
                </label>
                <p>On</p>
            </div>
            <div id="brightnessDiv">
                <p>Brightness Level</p>
                <div id="radioBright">
                    <input type="radio" id="low" name="bright" value="100" onChange={handleLevel}/>
                    <label for="low">low</label>
                    <input type="radio" id="mid" name="bright" value="200" onChange={handleLevel}/>
                    <label for="mid">mid</label>
                    <input type="radio" id="high" name="bright" value="300" onChange={handleLevel}/>
                    <label for="high">high</label>
                </div>
            </div>

        </div>
    )
}

export default Room3