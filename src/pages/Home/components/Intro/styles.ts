import styled, {keyframes} from "styled-components";

const pulse = keyframes `
    0%, 100%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.3);
    }
`




export const IntroContainer = styled.section`
    width: 100%;
    height: 34rem;
`
export const IntroContent = styled.div`
    display: flex;
    
    justify-content: space-between;
    gap: 3.5rem;

    > img{
        position: absolute;
        top: 3rem;
        z-index: -1;
    }

    img:nth-child(2){
        position: relative;
        top: -8rem;
        left: -16.5rem;
        animation: 2.5s infinite ${pulse};
    }
`
export const SectionEsq = styled.section`
    a{
        
        display: flex;
        align-items: center;
        margin-top: 4rem;
        max-width: 22.2rem;
        gap: .8rem;
        background: #1f1f1f;
        text-decoration: none;
        
        padding:  5px 12px 5px 12px;
        cursor: pointer;




        .border-svg{
            content: "";
            height: 1.2rem;
            display: flex;
            justify-content: center;
            border-right: 1px solid ${({theme}) => theme.colors["line-white"]};
            
           
        }

        span{
            font-weight: 400;
            color: ${({theme}) => theme.colors["second-white"]};
            
            strong{
                color: ${({theme}) => theme.colors["base-white"]} ;
            }
            
        }
       
    }

    h1{
        font-size: 4.5rem;
        font-weight: 700;
        line-height: 4rem;
        margin-top: 2.25rem;

        span{
            color: ${({theme}) => theme.colors["base-red"]};
        }

       
    }
    p{
            font-size: 1.125rem;
            line-height: 1.4rem;
            font-weight: 400;
            color: ${({theme}) => theme.colors["white-span"]};
            margin-top: 2.5rem;
    }

    aside{
        display: flex;
        align-items: center;
        margin-top: 3.75rem;
        
        

        .separator{
            content: "";
            height: 2.3rem;
            border-right: 2px solid ${({theme}) => theme.colors["base-white"]};
            margin-right: 0.625rem;
        }

        h2{
            font-size: 2.125rem;
            font-weight: 500;
            margin-right: 0.625rem;
        }

        span{
            color: ${({theme}) => theme.colors["white-span"]};
            font-size: 0.8rem;
            line-height: 1rem;

        }
    }

   


`

 export const ButtonLinkHero = styled.button`
    
    display: flex;
    justify-content: center;
    gap: 0.625rem;
    align-items: center;
    width: 15rem;
    height: 3.5rem;
    background: ${({theme}) => theme.colors["base-red"]};
    color: ${({theme}) => theme.colors["base-white"]};
    font-weight: 700;
    transition: 650ms ease;
    border: none;
    margin-right: 2.5rem;

    &:hover{
        background: ${({theme}) => theme.colors["base-red"]};
        filter: drop-shadow(0 0 1.5em ${({theme}) => theme.colors["base-red"]});
    }
 
 `


export const SectionDir = styled.section`
    position: relative;
    top: 4rem;
`

