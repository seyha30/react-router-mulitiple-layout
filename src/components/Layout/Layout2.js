import React from "react"
import Header2 from "./Header/Header2"
import Footer2 from "./Footer/Footer2"

function Layout2(props) {
  return (
    <>
      <Header2 />
      <main>{props.children}</main>
      <Footer2 />
    </>
  )
}


export default Layout2;