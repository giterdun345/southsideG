import React from 'react'
import Seo from "../components/layout/seo"
import Layout from "../components/layout/layout"
import CareerContent from '../components/careers/careerContent'
import CareerBanner from '../components/careers/careerBanner'
import CareerForm from '../components/careers/careerForm'

const Careers = () => {
  return ( 
    <Layout>
      <Seo title="Careers" />
      <CareerContent />
      <CareerBanner />
      <CareerForm />
    </Layout>
    
   );
}
 
export default Careers;