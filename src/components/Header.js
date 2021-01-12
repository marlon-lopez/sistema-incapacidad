import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import { logOut } from '../context/actions/UserActions'

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const { UserState, dispatch } = useContext(UserContext)

  const StyledNav = styled.nav`
    margin: 25px 0;
    position: relative;
    i {
      color: black;
      font-size: 1.5em;
      position: absolute;
      top: 10px;
      right: 5%;
      display: none;
      z-index: 90;
    }
    ul {
      display: flex;
      justify-content: center;
    }
    .log-out {
      display: none;
    }
    li {
      margin: 0 10px;
    }
    .dropdown-menu {
      display: none;
      position: absolute;
      box-shadow: 1px 1px 2px 3px rgba(205, 205, 205, 0.35);
      border-radius: 5px;
      font-size: 0.8em;
      width: 150px;
      padding: 10px 20px;
      z-index: 5;
      background: #fff;
      li {
        display: flex;
        flex-direction: column;
      }
      a {
        margin-top: 10px;
      }
    }
    #me {
      text-align: center;
      margin-left: 300px;
      position: relative;
      &:hover > .dropdown-menu {
        display: block;
      }
    }
    @media screen and (max-width: 620px) {
      margin: 0;
      width: 100%;
      .ul-menu {
        flex-direction: column;
        background-color: white;
        text-align: center;
        display: ${toggleMenu ? 'flex' : 'none'};
        background: white;
        position: absolute;
        width: 100%;
        z-index: 80;
      }
      li,
      a {
        margin-top: 15px;
      }
      #me {
        margin: 10px 0;
        &:hover > .dropdown-menu {
          display: none;
        }
      }
      .log-out {
        display: block;
      }
      i {
        display: block;
        position: fixed;
      }
    }
  `
  return (
    <StyledNav>
      <i className='fas fa-bars' onClick={() => setToggleMenu(!toggleMenu)}></i>
      <ul className='ul-menu'>
        {UserState.isAuthenticated && (
          <>
            <li>
              <Link to={`/myforms/${UserState.user.id}`}>
                Mis incapacidades
              </Link>
            </li>
            {UserState.user.isAdmin && (
              <li>
                <Link to='/users'>Usuarios</Link>
              </li>
            )}
            <li id='me'>
              <Link to='/me'>{UserState.user.name}</Link>
              <li className='log-out'>
                <Link to='/login' onClick={() => logOut(dispatch)}>
                  Cerrar Sesion
                </Link>
              </li>
              <ul className='dropdown-menu'>
                <li>
                  <Link to='/login' onClick={() => logOut(dispatch)}>
                    Cerrar Sesion
                  </Link>
                </li>
              </ul>
            </li>
          </>
        )}
      </ul>
    </StyledNav>
  )
}

export default Header
