import React from 'react'
import { BgBlue, BgOrang, FaqQuesx, HeaderSe, Peppo } from '../global'
import styles from "./thre.module.css"
import VectorTree from './VectorTree'
import ScrolLe from '../global/scroll'


function SecThree() {
     
  return (
    <div id='three' className={styles.Tone}>
        <HeaderSe text="Road Map"/>
         <div className={styles.Tonesvg}><VectorTree /></div> 
      {/* five section of text */}
      {/* Another div that hold the top margin */}
      <div className={styles.Fives}> 

      <div className={styles.TopMargin}>
        <Scroll/>
      
      <TreeSections date={`December-January 2023`} head={`Protocol Core Components Construction`} text={` Build the core components of the protocol, refine core mechanisms, and enhance computational logic.`} />
      
      <TreeSectionsTwo date={`February-March 2024`} head={`Mainnet Testing Phase`} text={`Launch the testnet and implement the economic model.`} />

      <TreeSections date={`March-April 2024`} head={`Introduction of WBRT-BIP Protocol`} text={`Release the WBRT-BIP protocol, advance interoperability, and enhance native protocol incentives.`} />

      <TreeSectionsTwo date={`May 2024`} head={`SWAP Infrastructure Construction`} text={`Build the foundational infrastructure for the SWAP platform.`} />
      
                  <TreeSections date={`June 2024`} head={`DeFi Protocol - Lending Products Construction`} text={`Build DeFi protocols and introduce lending products.`}  />
      </div>
      </div>
    </div>
  )
}

export default SecThree

// Tree sections One
export function TreeSectionsTwo({date, head, text}) {
  return(<div className={styles.SeTreeTwo}>
        <Para head={head} text={text}/>
        <div className={styles.PoloTwo}><FaqQuesx text={date}/></div>        
  </div>)
  }

// Tree sections One
export function TreeSections({date,head,text}) {
  return(<div className={styles.April}>
        <div className={styles.Polo}><FaqQuesx text={date}/></div>        
        <Para head={head} text={text}/>
      {/* Bg colors */}
        <div className={styles.BgCo}>
          <div className={styles.BLeft}><BgBlue/></div>
          <div className={styles.Boran}><BgOrang/> </div> 
        </div>
  </div>)
}


// Para
export function Para({head,text}) {
  return(<div className={styles.Para}>
    <FaqQuesx text={head}/>
    <Peppo text={text}/>
  </div>)
}

// scrool animation
export function Scroll() {
  return(<div  className={styles. Reef}  >
    <ScrolLe/>
  </div>)
}
 