import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/images/close.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Sidebar = styled.aside`
  background-color: ${cores.cinza};
  z-index: 1;
  padding: 32px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaclaro};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branca};
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.cinzaclaro};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-weight: bold;
    font-size: 16px;
    color: ${cores.branca};
  }

  span {
    display: block;
    font-weight: bold;
    font-size: 14px;
    color: ${cores.branca};
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8;
    right: 0;
  }
`
