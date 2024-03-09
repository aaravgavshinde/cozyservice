import React from 'react'
import Services from './Services';
import HERO from './HERO';

export default function AllCompo(props) {
  return (
    <div>
      <HERO />
      <Services componentRef={props.componentRef}/>
    </div>
  )
}
