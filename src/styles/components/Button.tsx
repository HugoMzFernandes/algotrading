import styled from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  color: white;
  margin: 1em 1em 2em 0em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 3px;
  text-align: center;
  display: inline;
  :hover {
    cursor: pointer;
    opacity:0.6;
  }
`;

export const GreenButton = styled(Button)`
background: #4a9f4a;
`

export const GreyButton = styled(Button)`
background: #4e4e4e;
`

export const RedButton = styled(Button)`
background: #cf4d4d;
`
