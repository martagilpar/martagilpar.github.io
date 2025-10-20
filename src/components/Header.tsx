import type { Component } from 'solid-js';

const Header: Component = () => {
  return (
    <header class="site-header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <a href="/" class="logo-link">Mind Matters</a>
          </div>
          <nav class="main-nav">
            <a href="/" class="nav-link">Articles</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;