import {ReactComponent as Githubicon} from 'assets/img/github-icon.svg';
import './styles.css';

function Navbar(){
    return(
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/gabriellbezerra" target="_blank" rel="noreferrer">
              <div className="dsmovie-contact-container">
                <Githubicon />
                <p className = "dsmovie-contact-link">/GabriellBezerra</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;