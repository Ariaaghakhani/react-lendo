import React from 'react'
import Header from './header.jsx'
import Intro from './Intro.jsx'
import How from './How.jsx'
import Calc from './Calc.jsx'
import FAQ from './FAQ.jsx'
import Download from './Download.jsx'
import Footer from './Footer.jsx'

function App() {
    return (
        <>
            <section className='w-full bg-bgGray'>
            <Header />
            <Intro />
            <How /> 
            <Calc />
            <FAQ />
            <Download />
            <Footer />

            </section>
        </>
    )
}

export default App