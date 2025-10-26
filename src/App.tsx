import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {

  return (
    <div className=" bg-white">
      <Navigation />
      <main>
        <Hero />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default App
