import { useEffect} from 'react'
import './App.css'
import Home from './pages/Home'


function App() {
 
  /* useEffect(() => { to scroll from the top on page refresing 
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); */
  
  return (
    <>
      <Home />
    </>
  )
}

export default App
