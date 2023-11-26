import React from 'react'
import { BgBlue, BgOrang, GreenBtn, HeaderSe, Peppo } from '../global'
import styles from "./two.module.css"

function SecTwo() {
  return (
    <div className={styles.Stwo}>
        {/* Scroll */}
            <Scrolindi/>
        {/* Bottom */}
        <div className={styles.Sthree}>
            {/* left */}
             <ExtTwo/>
            {/* {right} */}
            <ExtTwoLeft/>             
        </div>
            <Bgclor/>
    </div>
  )
}

export default SecTwo


export function Scrolindi() {
    return(<div  className={styles.Scroll}>
        <img src={require("../../photos/Scroll.png")}/>
            <HeaderSe text={`What we Do`}/> 
    </div>)
}


// extion two right side
export function ExtTwo() {
    return(<div id='two' className={styles.Extwo}>
        <div> 
        <Peppo text={`
            Built upon the BRC protocol, the WBRT protocol introduces cross-chain interoperability deployment, protocol inheritance, application nesting, state machine model, and decentralized governance. It brings computational capabilities to the Bitcoin blockchain, enabling permissionless and trustless automatic pricing, liquidity providers (LP), decentralization, and connectivity.`}/>
        </div>
        <div className={styles.Butn}><GreenBtn text={`Join Now`}/></div>

    </div>)
}

// extion two Left side
export function ExtTwoLeft() {
    return(<div className={styles.ExIma}>
        <img className={styles.Exnf} src={require("../../photos/NFT.gif")}/>
        <img className={styles.Exci} src={require("../../photos/Circle.png")}/>
    </div>)
}

// gradients
export function Bgclor() {
    return(<div className={styles.BgC}>
        <div className={styles.GRight}><BgOrang/></div>  
        <div className={styles.GLeft}><BgBlue/></div>
</div>)
}