import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: initial;
  align-items: initial;
  flex-direction: column;
  overflow: scroll;
  h1 {
    font-size: 28px;
    color: ${props => props.theme.colors.text};
    margin-bottom: 30px;
  }
  h2 {
    font-size: 16px;
    color: ${props => props.theme.colors.text};
    padding: 10px;
    background-color: #515960;
  }
  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`

export const TableContainer = styled.div`
  height: 35vh;
  overflow: auto;
  margin-bottom: 30px;
`
