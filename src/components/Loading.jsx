import React from 'react'
import { Loader } from '../atoms/styled-buttons'
import spinner from '../assets/svg/spinner.gif'

function Loading() {
  return (
    <Loader>
        <img src={spinner} alt="loader" />
    </Loader>
  )
}

export default Loading