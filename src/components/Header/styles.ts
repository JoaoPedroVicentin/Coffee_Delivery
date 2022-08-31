import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 2rem 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 550px) {
        padding: 2rem 1rem;
    }
`

export const Action = styled.div`
    gap: 0.75rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Location = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    font-size: 0.875rem;

    background: ${props => props.theme['purpleLight']};
    color: ${props => props.theme['purpleDark']};
`

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem;
    background: ${props => props.theme['yellowLight']};
    color: ${props => props.theme['yellowDark']};
    border-radius: 8px;

`