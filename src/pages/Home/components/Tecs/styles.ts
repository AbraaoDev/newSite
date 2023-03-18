import styled from "styled-components";

export const TecsContainer = styled.div`
    width: 100%;
    /* margin-top: 30rem;  só fica adequado se habilitar essa margem*/ 
    height: 12rem;
    background: ${({theme}) => theme.colors["base-red"]};
    
`
export const SectionUp = styled.section`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;


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