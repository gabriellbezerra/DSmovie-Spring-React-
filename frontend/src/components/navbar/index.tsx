import {ReactComponent as Githubicon} from 'assets/img/github-icon.svg';
import './styles.css';

function NavBar(){
    return(
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/gabriellbezerra">
              <div className="dsmovie-github-icon">
                <Githubicon />
                <p className = "dsmovie-github-name">Gabriel Bezerra</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default NavBar;