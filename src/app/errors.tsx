'use client'

import React, { useEffect } from 'react'

export default function ErrorPage({
    error,
    retry
}:{
  error: Error & {digest ?: string }
  retry:()=> void
}){
    useEffect(()=>{
        console.error(error)
    },[error])
}
   