import React  from 'react'
import Items from './Screens/Items'
import Navbar from './Includes/Navbar'
import Helmet from 'react-helmet'
import Slicker from './Screens/Slicker'
function Mainpage({item, setItem}) {
  return (  
    <>
      <Helmet>
        <title>Buy now Shopping</title>
      </Helmet>
        <Navbar item={item} setItem={setItem}/>
        <Slicker />
        <Items item={item} setItem={setItem}/>
    </>
  )
}

export default Mainpage