import React from 'react'
import { Icons } from '../footer'
import { BgBlue, BgOrang, BlackBtn, GreenBtn, Peppo } from '../global'
import styles from "./one.module.css"

function SectionOne() { 
      {}
  return (
    <div className={styles.SeOne}>
        <div className={styles.Right}>  
          <SecRightOne />
          <SecRightTwo />
        </div>
        
        {/* image of GIFS */}
        <div className={styles.Left}> 
        <img className={styles.Lim} src={require("../../photos/NFT.gif")}/>
        <img className={styles.Lci} src={require("../../photos/Circle.png")}/>
        
        <div className={styles.Paki}>
          <Rought/>
          <RoughtTwo/>
        </div>

        </div>
      <BgGradiant/>

    </div>
  )
}

export default SectionOne


// Section Right One
export function SecRightOne() {
   return(<div className={styles.RightOne}>
     <Peppo text={`Welcome!`}/>
     <h1>WBRT</h1>
     <h3>BTC-DEFI PROTOCOL</h3>
       <Peppo text={` The implementation plan of the DeFi-WBRT protocol aims to introduce Bitcoin (BTC) ecological assets into the DeFi ecosystem, and build a DeFi protocol that supports cross-chains by expanding BRC20 assets and ARC20 assets.`}/>
    {/*  */}
    <Commen/>
   </div>)
}
// Section Right Two
export function SecRightTwo() {
  return(<div className={styles.SecRight}>

  </div>)
}

// Background Gradients
export function BgGradiant(){
  return(<div className={styles.BgGradiant}>
      <div className={styles.BgBluex}><BgBlue/></div>
      <div className={styles.BgOrangx}><BgOrang/></div>
    </div>
  )
}

// Common Components
export function Commen() {
  return(<div className={styles.Common}>
   <div className={styles.TwoButon}><GreenBtn text={`Explore`}/>
    <BlackBtn text={`Donate`}/></div>
    <Icons/>
  </div>)
}

// Rought
export function Rought() {
  return(<div className={styles.Yoyo}>
            <img className={styles.Rou} src={require("../../photos/NFT.gif")}/>
            <img className={styles.Rout} src={require("../../photos/Circle.png")}/>
  </div>)
}

export function RoughtTwo() {
  return(<div className={styles.Yoya}>
            <img className={styles.Roua} src={require("../../photos/NFT.gif")}/>
            <img className={styles.Routa} src={require("../../photos/Circle.png")}/>
  </div>)
}