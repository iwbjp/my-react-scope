import { scopeClass } from './ScopeClass'
import './About.css'

function About() {return (
    <>
      <h1>About</h1>
      <p className="sample">sample</p>
    </>
  )
}

export default scopeClass(About, 'About');
