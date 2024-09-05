import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components'
import './App.css';

function App() {
  return (
    <div className="dark:bg-darkbg">
      <Header/>
      <main >
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
