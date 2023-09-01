import React, {useState, useEffect} from 'react'
import Card from './Card'

export default function Game() {

  const data = {
    picBank: [],
    active: []
  }

  return (
    <div id='game'>
        <Card {...data}/>
        <Card {...data}/>
        <Card {...data}/>
        <Card {...data}/>
        <Card {...data}/>
        <Card {...data}/>
        <Card {...data}/>
        <Card {...data}/>
        <Card {...data}/>
        <Card {...data}/>
        <Card {...data}/>
        <Card {...data}/>
        <Card {...data}/>
        <Card {...data}/>
        <Card {...data}/>
    </div>
  )
}
