import React from 'react'

import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-main'>
      <Link to={'search'}>Search</Link>
      <Link to={'/'}>Front</Link>
    </div>
  )
}
