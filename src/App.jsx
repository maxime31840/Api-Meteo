import './App.css'
import Custom from './Header/Custom'
import Card from './Contenu/Card'
import Footer from './Footer/Footer'

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        <Custom />
        <Card />
        <Footer />
      </div>
    </>
  )
}

export default App
