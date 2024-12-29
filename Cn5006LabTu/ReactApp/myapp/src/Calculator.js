import App from "./App";
import './App.css'
import './Calculator.css'
import React from "react";
import Button from "./Button.js";
import showmepic from './Assets/showmepic.jpg';
import {useState} from "react";

function KeyPadComponent(props){
    const [text1, setText ] = useState("")
    const [imageVisible, setImageVisible] = useState(false);
    const ClickHandle = (e) => {
        if (e.target.value=="C")
        {
       
            setText("")    
        }
        else if  (e.target.value=="=")
        {
        setText(eval(text1))
        alert(eval(text1))             
        }
        else
        setText(text1+e.target.value)
      };

      // show me Button Handleer
      
      let handleShowMeClick = () =>{
        setImageVisible(!imageVisible);
      }

      let handleSquare=()=>{
        if (text1){
            setText(text1*text1);
        }
        else{
            setText("404");
        }


      }

    
   
        return (
            <div className="Calculator">
                <div className="screen-row">
                <input type="text" readOnly value= {text1} />
                </div>
                
               
               <div >
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle}/>
                <Button label="C" ClickHandle={ClickHandle}/> 
                </div>

                <div >
                <Button label="1"  ClickHandle={ClickHandle}/>
                <Button label="2" ClickHandle={ClickHandle}/>
                <Button label="3" ClickHandle={ClickHandle}/>
                <Button label="+" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="4" ClickHandle={ClickHandle}/>
                <Button label="5" ClickHandle={ClickHandle}/>
                <Button label="6" ClickHandle={ClickHandle}/>
                <Button label="-" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="7" ClickHandle={ClickHandle}/>
                <Button label="8" ClickHandle={ClickHandle}/>
                <Button label="9" ClickHandle={ClickHandle}/>
                <Button label="*" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="." ClickHandle={ClickHandle}/>
                <Button label="0" ClickHandle={ClickHandle}/>
                <Button label="=" ClickHandle={ClickHandle} className="eqbutton"/>
                <Button label="/" ClickHandle={ClickHandle}/>
                </div>
                
                
                <div>
                    <Button label="Sq" ClickHandle={handleSquare}></Button>
                    <Button label="SMe" ClickHandle={handleShowMeClick}></Button>
                </div>


                {imageVisible && (
                <div>
                    <img src={showmepic} alt="Show me pic" className="disimg" />
                </div>
            )}
                
            </div>
        );



    
}
export default KeyPadComponent;