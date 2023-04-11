import styled from "styled-components";

export const TecsContainer = styled.div`
    width: 100%;
    margin-top: 5rem;  
    height: 12rem;
    background: ${({theme}) => theme.colors["base-red"]};
    
`
export const SectionUp = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;


    h4{
        text-align: right; 
        font-size: 1.125rem;
        line-height: 1.5rem;
    }
    
    p{
        font-weight: 400;
    }

    .divisor{
            content: "";
            height: 2.5rem;
            width: 1px;
            background: ${({theme}) => theme.colors["three-white"]};
            transform: rotate(-30deg);
    }
`

export const SectionDown = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 

    svg{
        font-size: 2.125rem;
        color: ${({ theme }) => theme.colors["brand-white"]};
        
    }
`