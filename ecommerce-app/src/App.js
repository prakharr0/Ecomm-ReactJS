import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import HomeComponent from './Components/HomeComponent';

function App() {
  return (
    //BEM convention --> app; not App
    <div className="app">
    {/*   HEADER   */} 
    
    <HeaderComponent></HeaderComponent>


    {/*   HOME   */} 
    <HomeComponent></HomeComponent>
    </div>
  );
}

export default App;
