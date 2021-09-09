import React from 'react'

import './Navbar.scss'
export default function NavBar() {
  return (
     <nav>
          <div class="nav-wrapper navbar grey darken-4">
          <a href="#" class="brand-logo">Хайпожор</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
       <li><a href="/">Ассортимент</a></li>
        <li><a href="/">Доставка</a></li>
        <li><a href="badges.html">Контакты</a></li>
        <li><a href="collapsible.html">супиригра</a></li>
    </ul>
          </div>
     </nav>
  )
}
