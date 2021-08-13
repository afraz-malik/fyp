import React from 'react'
// import Header from './../components/Header/Header'
import Header from '../components/Header/Header'
import Departments from '../components/Departments/Departments'
import Search from '../components/Search/Search'
import FactultyCard from '../components/FacultyCard/FactultyCard'
import Contact from '../components/Contact/Contact'
import BecomeFaculty from '../components/BecomeFaculty/BecomeFaculty'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Departments />
      <Search />
      <FactultyCard />

      <Contact />
      <BecomeFaculty />
      <Footer />
    </div>
  )
}

export default Home
