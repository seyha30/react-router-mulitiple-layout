import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"



function Layout(props) {
  return (
    <>
      <Header />
        <main>{props.children}</main>
      <Footer />
    </>
  )
}

// class Layout extends React.Component {
//   render(){
//     return (
//       <>
//         <Header />
//           <main>{this.props.children}</main>
//         <Footer />
//       </>
//     )
//   }
// }




export default Layout;