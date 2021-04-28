import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? 'rgb(206, 212, 221)' : '#077BF1')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #000000;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    outline: none;
    border: black solid 1px;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({ round }) => (round ? '15px' : 'none')};

    &:hover {
        background: ${({primary}) => (primary ? '#077BF1' : '#f26A2E' )};
        transform: translateY(-2px);
    }
`
