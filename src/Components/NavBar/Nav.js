import React, { useState } from 'react'
import Select from 'react-select'
import './Nav.css'
function Nav() {
    const [locationSearchExpand,setLocationSearchExpand]=useState(false)
    const [locationSearch,setLocationSearch]=useState('')
    const [languageOptionsopened,setLanguageOptionOpened]=useState(false)
    const [languageChoosen,setLanguageChoose]=useState('English')
    console.log(locationSearch);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]


      function DropdownItem(props){
        return(
          <li className='dropdownItem'>
            {/* <img src={props.img} alt="" /> */}
            <div className='dropdownItemContentContainer' onClick={(e)=>{
                e.preventDefault()
                setLanguageChoose(props.text)
              }}>
              <a href="" >{props.text}</a>
             {props.text===languageChoosen && <span className="material-symbols-outlined">done</span>}
            </div>
          
          </li>
        )
      }
  return (
    <div className='navbar'>
        <svg  width="44px" height="44px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
        <div className='locationBox'>
        <span className="material-symbols-outlined searchIcon2">search</span>
        <input className='locationInputField' placeholder='Search city, area or loca...' type="text" onChange={(e)=>setLocationSearch(e.target.value)} value={locationSearch}/>
        {locationSearch.length==0 &&            <span className={`material-symbols-outlined ${languageOptionsopened ? 'upArrowIcon'  : 'downArrowIcon'} `}>expand_more</span>}
       {locationSearch.length > 0 && <span onClick={()=>setLocationSearch('')} className="material-symbols-outlined closeIcon">close</span> } 
        </div>
        <div className='searchContainer'>
            <input type="text" className='input' placeholder='Find Cars,Mobile Phones and more...'/>
            <button className='searchBtn'><span className="material-symbols-outlined">search</span></button>
        </div>
        <div onClick={()=>setLanguageOptionOpened(!languageOptionsopened)} className="languageBox">
          <label className='languageTxt' htmlFor="">{languageChoosen}</label>
          {  <span className={`material-symbols-outlined ${languageOptionsopened ? 'upArrowIcon'  : 'downArrowIcon'} `}>expand_more</span>}


    {languageOptionsopened && <div className="dropdownMenu">

            <ul>
              <DropdownItem img={'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} text={'English'} checkMark={true} />
              <DropdownItem img={'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} text={'हिंदी'} checkMark={false} />
             
      
            </ul>
          </div>}
        </div>
        <div className='showOnMobile' style={{display:'flex',columnGap:'15px'}}>
          <button className='loginBtn'>Login</button>
          <div className="sellBtnOuter" id="border-left">
            <div className="sellBtnInner" >
            <span className="material-symbols-outlined">add</span>
                <label htmlFor="">sell</label>
            </div>
          </div>
        </div>

        
    </div>
  )
}

export default Nav