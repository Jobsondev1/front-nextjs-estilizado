import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 10px;
    font-size:25px;
    line-height: 32px;
    color: ${props => props.theme.colors.secundary};
  }

  img {
    height:300px;
    width:300px;
  }
`
