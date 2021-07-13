import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin 0 auto
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`

export const ListItem = styled.li`
  margin: 0.5rem 0;
  background: #000;
  color: #fff;
  padding: 0.5rem;
`
export const LinkHome = styled(Link)`
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0.25rem;
  margin: 0.1rem auto;
  display: block;
  width: 7.2rem;
  padding: 0.8rem 0;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: #ff4700;
  }
`
