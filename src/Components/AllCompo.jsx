import React from 'react'
import Services from './Services';
import HERO from './HERO';

export default function AllCompo(props) {
  return (
    <div>
      <HERO compoA={props.compoA}/>
      <Services componentRef={props.componentRef}/>
    </div>
  )
}
