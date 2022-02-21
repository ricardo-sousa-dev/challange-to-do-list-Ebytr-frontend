import React from 'react';
import { Link } from 'react-router-dom';
import '../css/components/simpleFooter.css';
import { GrLinkedin } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';

function SimpleFooter() {
  return (
    <div className="simple-footer">
      <div className="developer">
        Developed by Ricardo Sousa
      </div>
      <div className="social-media">
        <Link
          to="https://github.com/ricardo-sousa-dev"
          className="link-github"
        >
          <FaGithub className="icon-social-media"/>
        </Link>
        <Link
          to="https://www.linkedin.com/in/rwmsousa/"
          className="link-linkedin"
        >
          <GrLinkedin className="icon-social-media"/>
        </Link>
      </div>
    </div>
  );
}

export default SimpleFooter;