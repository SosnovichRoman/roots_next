import React from 'react'
import PopularProducts from '../components/Home/PopularProducts'
import WhyRoots from '../components/Home/WhyRoots'
import AboutSucculents from '../components/Home/AboutSucculents'
import Subscribe from '../components/Home/Subscribe'
import HomeHero from '../components/Home/HomeHero'
import Comments from '../components/Home/Comments'

const HomeScreen = () => {
  return (
    <main>
      <HomeHero />
      <PopularProducts />
      <WhyRoots />
      <AboutSucculents />
      <Subscribe />
      <Comments />
    </main>
  )
}

export default HomeScreen