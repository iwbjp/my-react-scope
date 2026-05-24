import { scopeClass } from './ScopeClass'
import './Home.css'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p className="sample">sample</p>
    </>
  )
}

export default scopeClass(Home, 'Home');
