"use client"

import React, {Fragment} from 'react'
// import {usePathname} from 'next/navigation';
import MobileNav from "@/components/MobileNav";
export const LayoutProvider = ({children}) => {
  // const pathname = usePathname()
  return (
    <Fragment>
      <MobileNav />
      {children}
    </Fragment>
  )
}
