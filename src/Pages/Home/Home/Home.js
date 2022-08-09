import React from 'react'
import Experts from '../Experts/Experts.js'
import Services from '../Services/Services.js'
import Banner from '../Banner/Banner.js'
import PageTitle from '../../Shared/PageTitle/PageTitle.js'

const Home = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </>
  )
}
export default Home