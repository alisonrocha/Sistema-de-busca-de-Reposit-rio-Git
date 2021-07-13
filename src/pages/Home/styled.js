import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 0.25rem 0 0 0.25rem;
  padding: 1rem 7rem 1rem 1rem;

  &:focus,
  &:active {
    outiline: none;
    box-shadow: none;
  }
`

export const Button = styled.button`
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 0.25rem 0.25rem 0;
  padding: 1rem;

  &:hover {
    background: #ff4700;
  }
  &:focus,
  &:active {
    outiline: none;
    box-shadow: none;
  }
`

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`
