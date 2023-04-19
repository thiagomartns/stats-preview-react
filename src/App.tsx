import './App.scss';
import ImageDesktop from './assets/img/image-header-desktop.jpg'

function App() {

  return (
    <div className="App">
      <div className="app-content">
        <div className="app-content--info">
          <div className="title-and-parag">
            <h1 className="info-title">Get <span>insights</span> that help your business grow.</h1>
            <p className="info-parag">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
          </div>
          <div className="info-stats">
            <div className="stats-container">
              <h1 className='stats-container--number'>10k+</h1>
              <p className="stats-container--type">companies</p>
            </div>
            <div className="stats-container">
              <h1 className='stats-container--number'>314</h1>
              <p className="stats-container--type">templates</p>
            </div>
            <div className="stats-container">
              <h1 className='stats-container--number'>12m+</h1>
              <p className="stats-container--type">queries</p>
            </div>
          </div>
        </div>
        <div className="app-content--img">
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  )
}

export default App
