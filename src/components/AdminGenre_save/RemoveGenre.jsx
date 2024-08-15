import React from "react";
import './RemoveGenre.css';
import {Link} from 'react-router-dom'
import Navbaradmin from "../../components/NavAndFooter/NavAdmin"
import Genre_txt from './Genre_txt.jsx';
import { register } from '../controller/UserController';
import { useEffect, useState } from 'react';
import Footer from "../NavAndFooter/Footer.jsx";
const RemoveGenre = () => {
    
    const[category,setCategory] = useState([
        {title:'Romance'},{title:'Informational'},{title:'Fiction'},{title:'Mystery'},{title:'Psychology'}
    ])

    const[addcat,setCategorynew]=useState("")
    const onAddCategory = event => {
        setCategory(event.target.value);
    };
    

    return (
    <div className="main">
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
       <div className="AdminNav"> <Navbaradmin/> </div>
       
       <div>
        <h3 className="heading">
            Available Categories:
        </h3>
       </div>
      
       <div className="filled-box">
            <div className="row">
                <div className="categoryitem">
                   
                <label className="checklabel">
                  
                   <input type="checkbox" name="catgroup" id="1" /><Genre_txt genre={category[0]}/> 

                   </label>
                   
                 </div>
                <div className="categoryitem">
                <label className="checklabel">
                   <input type="checkbox" name="catgroup" id="2">
                    </input>
                    <Genre_txt genre={category[1]}/>
                   </label></div>
                <div className="categoryitem">
                <label className="checklabel" >
                   <input type="checkbox" name="catgroup" id="3">
                    </input>
                    <Genre_txt genre={category[2]}/>
                   </label></div>
                <div className="categoryitem">
                <label className="checklabel" >
                   <input type="checkbox" name="catgroup" id="4">
                    </input>
                    <Genre_txt genre={category[3]}/>
                   </label></div>
                <div className="categoryitem"> <label className="checklabel" >
                   <input type="checkbox" name="catgroup" id="5">
                    </input>
                    <Genre_txt genre={category[4]}/>
                   </label></div>
            </div>
               
                <hr className="line"/>
                
            <div className="row">
                <div className="categoryitem">
                <label className="checklabel">
                   <input type="checkbox" name="catgroup" id="1">
                    </input>
                    <Genre_txt genre={category[0]}/>
                   </label></div>
                <div className="categoryitem">
                <label className="checklabel">
                   <input type="checkbox" name="catgroup" id="2">
                    </input>
                    <Genre_txt genre={category[1]}/>
                   </label></div>
                <div className="categoryitem">
                <label className="checklabel">
                   <input type="checkbox" name="catgroup" id="3">
                    </input>
                    <Genre_txt genre={category[2]}/>
                   </label></div>
                <div className="categoryitem">
                <label className="checklabel">
                   <input type="checkbox" name="catgroup" id="4">
                    </input>
                    <Genre_txt genre={category[3]}/>
                   </label></div>
                <div className="categoryitem">
                <label className="checklabel">
                   <input type="checkbox" name="catgroup" id="5">
                    </input>
                    <Genre_txt genre={category[4]}/>
                   </label>
                   </div>
            </div>
                
                <hr className="line"/>
        
            <div className="row">
                <div className="categoryitem">
                <label className="checklabel">
                   <input type="checkbox" name="catgroup" id="1">
                    </input> 
                    <Genre_txt genre={category[0]}/>
                   </label></div>
                <div className="categoryitem">
                <label className="checklabel">
                   <input type="checkbox" name="catgroup" id="1">
                    </input>
                    <Genre_txt genre={category[1]}/>
                   </label></div>
                <div className="categoryitem">
                <label className="checklabel">
                   <input type="checkbox" name="catgroup" id="1">
                    </input>
                    <Genre_txt genre={category[2]}/>
                   </label>
                   </div>
                <div className="categoryitem">
                <label className="checklabel">
                   <input type="checkbox" name="catgroup" id="1">
                    </input>
                    <Genre_txt genre={category[3]}/>
                   </label></div>
                <div className="categoryitem">
                <label className="checklabel">
                   <input type="checkbox" name="catgroup" id="1">
                    </input>
                    <Genre_txt genre={category[4]}/>
                   </label></div>
            </div>
            <hr className="line"/>

           
        </div>
        
        <div className="Box">
             <div className="rectangle"></div>
        </div>

        <div className="buttonsactions">
            <button type="submit" className="savebutton" >Save</button> 
            <button type="submit" className="removebutton" >Remove</button> 
        </div>  

        <div className="Footer"> <Footer/></div>

    </div>
    )
}
export default RemoveGenre