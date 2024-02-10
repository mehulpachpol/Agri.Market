import React from 'react'
import { Footer, Navbar, Product } from "../components"
import WeatherApp from '../components/Weatherapp'

const Products = () => {
  return (
    <>
      <Navbar />
      {/* <WeatherApp/> */}
      <Product />
      <Footer />
    </>
  )
}

export default Products