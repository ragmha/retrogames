import React, { PureComponent } from 'react';
import { Link } from 'react-router';

class Home extends PureComponent {
  active(path) {
    const { pathname } = this.props.location;

    if (pathname === path) return 'active';
  }

  render() {
    return (
      <div>
        <div>
          <ul className="nav masthead-nav">
            <li className={this.active('/')}>
              <Link to="/">Home</Link>
            </li>
            <li className={this.active('/about')}>
              <Link to="/about">About</Link>
            </li>
            <li className={this.active('/contact')}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
