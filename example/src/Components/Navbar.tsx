import styled  from 'styled-components'

export const NavBar = styled.nav`
  background-color: ${props => props.theme === 'dark' ? '#040404' : '#EE4E02'};
  transition: background-color 1s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  font-size: 20px;
`