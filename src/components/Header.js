import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import { logOut } from '../context/actions/UserActions'

function Header() {
  const { UserState, dispatch } = useContext(UserContext)

  return (
    <StyledNav>
      <ul>
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

const StyledNav = styled.nav`
  margin: 25px 0;
  ul {
    display: flex;
    justify-content: center;
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
`

export default Header
