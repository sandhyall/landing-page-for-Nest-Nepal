import React from 'react'
import Googleworkshop from '../Conponent/Common/Googleworkshop'
import Truestedclient from '../Conponent/Common/Truestedclient'
import FeaturesSection from '../Conponent/Feature/FeatureSection'
import SolutionBusiness from '../Conponent/Feature/SolutionBusiness'
import Brand from '../Conponent/Feature/Brand'
import FAQ from '../Conponent/Feature/FAQ'
import Contact from '../Conponent/Feature/Contact'

const Landingpage=()=> {
  return (
    <div>
        <Googleworkshop/>
        <Truestedclient/>
        <FeaturesSection/>
        <SolutionBusiness/>
        <Brand/>
        <FAQ/>
        <Contact/>
        
        </div>
  )
}

export default Landingpage