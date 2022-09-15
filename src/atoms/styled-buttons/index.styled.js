import styled from "styled-components";

export const StyledButtons = styled.button`
   border-radius: 10px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    border-radius: 50px;
    padding: .5rem 1rem;
    font-weight: 500;
    font-size: .7rem;
    text-transform: uppercase;
        svg{
            width: 12px;
            height: 12px;
            margin-left: .5rem;
            path{
                fill: white;
            }
`
export const StyledButtonLinks = styled.a`
    text-decoration: none;
    border-radius: 10px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    border-radius: 50px;
    padding: .5rem 1rem;
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase;
    color: white;
    margin: 0 .5rem;
    &.light{
        background-color: #1B9260;
    }
    &.dark{
        background-color: #A1272E;
    }
        svg{
            width: 12px;
            height: 12px;
            margin-left: .5rem;
            path{
                fill: white;
            }
`

