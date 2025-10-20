import type { Component } from 'solid-js';

const Footer: Component = () => {
  return (
    <footer style="background: var(--primary-green); color: var(--text-white); padding: 2rem 0; margin-top: 4rem; text-align: center;">
      <div class="container">
        <p style="color: rgba(255, 255, 255, 0.8); margin: 0;">
          © 2024 Mind Matters. Exploring psychology with curiosity and compassion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;