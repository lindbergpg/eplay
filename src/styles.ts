import { createGlobalStyle, styled } from 'styled-components'

export const cores = {
  branca: '#EEE',
  preta: '#111111',
  cinza: '#333333',
  cinzaclaro: '#A3A3A3',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
}

body {
    background: ${cores.preta};
    color: ${cores.branca};
    padding-top: 40px;


    .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    }
}
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
