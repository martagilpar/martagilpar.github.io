import type { Component } from 'solid-js';

const Header: Component = () => {
  return (
    <header class="site-header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <a href="/" class="logo-link">Marta</a>
          </div>
          <nav class="main-nav">
            <a href="/" class="nav-link">Artículos</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;