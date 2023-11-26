import React, { useEffect, useRef, useState } from 'react'
import { BgBlue, BgOrang, FaqQuesx, HeaderSe } from '../global'
import styles from './four.module.css'

function SecFour() {
  return (
    <div className={styles.Fone}> 
     {/* small div */}
        <SmFaq/>

         {/*Faq section  */}
        <HeaderSe text={`FAQ`}/>
    <div className={styles.Bigfa}>
        {/* right */}
        <BigfaRight/>
        {/* Left */}
        <BigfaLeft/>
        {/* Bg colors */}
        <BgLast/>
    </div>
  </div>)
}

export default SecFour

// SmFaq
export function SmFaq() {
    return(<div id='four' className={styles.SmF}>
        <HeaderSe text={`Payout Schedule`}/>
        {/* Pdf button */}
        <GreenPdf text={`View DOC`}/>

{/* Bg colors */}
        <div className={styles.SmallBG}>
            <div className={styles.SLeft}><BgBlue/></div>
            <div className={styles.SRight}><BgOrang/></div>
        </div>
    </div>)
}

// Right
export function BigfaRight() {
    return(<div id='five' className={styles.FaRight}>
        <img className={styles.FaRimg} src={require("../../photos/NFT.gif")} alt=""/>
        <img className={styles.Circ} src={require("../../photos/Circle.png")} alt=""/>
    </div>)
}

// Left
export function BigfaLeft() {
    return(<div className={styles.FaLeft}>
     
        <FaqQues text={`What is the purpose of DeFi-WBRT?`} answer={`DeFi-WBRT aims to integrate BTC ecosystem assets, utilizing the BRC20 and ARC20 standards, to construct a decentralized finance (DeFi) protocol. The primary focus includes supporting cross-chain functionality and enabling applications such as AMM DEX and staking loans.`} />

        <FaqQues text={`How does DeFi-WBRT ensure cross-chain compatibility?`} answer={`DeFi-WBRT achieves cross-chain compatibility by implementing a bridge mechanism. This mechanism facilitates the seamless transfer of assets between different blockchain networks, allowing users to participate in the DeFi-WBRT ecosystem regardless of the blockchain they are using.`} />

        <FaqQues text={`What economic model governs DeFi-WBRT's native token?`} answer={`DeFi-WBRT's native token follows an economic model that includes reward mechanisms for active participation, governance rights for token holders, and staking rewards for those who lock their tokens within the protocol. This model aims to incentivize engagement and long-term support.`} />

        <FaqQues text={`In what way does DeFi-WBRT support AMM DEX functionality?`} answer={`DeFi-WBRT supports AMM DEX (Automated Market Maker Decentralized Exchange) functionality by integrating AMM algorithms. This allows users to trade assets directly within the protocol without the need for intermediaries, enhancing liquidity and market efficiency.`} />

        <FaqQues text={`What is the roadmap for DeFi-WBRT's future development?`} answer={`DeFi-WBRT plans to expand its ecosystem by introducing multi-chain and multi-protocol support in future versions. The initial focus is on the BRC100 protocol, with subsequent versions incorporating advancements and user feedback to further enhance the protocol's capabilities.`} />

    </div>)
}

// questions
export function FaqQues({text,answer}) {
    const [active , setActive] = useState(false);
    const contentRef = useRef(null);

    useEffect(() =>{

        contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);
        
    function Hidde(){
        // hidde text on click
            setActive(!active);
    }
    return(<div className={styles.FaqQ}>
            <div onClick={Hidde} className={styles.FTwo}>
                <FaqQuesx text={text}/>
                <img  src={require("../../photos/plus.png")} alt="icon"/>
            </div>
            <div ref={contentRef} className={active ? styles.FaqA : styles.FaqA2}>
                <p>{answer}</p>
            </div>


        </div>
    )
}

// Bg colors for last section
export function BgLast() {
    return(<div className={styles.BGH}>
        <div className={styles.Leed}><BgOrang/></div>
        <div className={styles.Rii}><BgBlue/></div>   
    </div>)
}

// PDF ButtOn
export function GreenPdf({text}) {
    return(<div className={styles.GreenPdf}>
        <img src={require("../../photos/pdf.png")} alt=""/>
        <p>{text}</p>
    </div>)
}