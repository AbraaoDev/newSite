import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12rem;


    

    div{
        > p{
            background: linear-gradient(#1f1f1f, #1f1f1f);
            background-size: 100% 1px;
            background-repeat: no-repeat;
            background-position: center;
            text-indent: 10%;

            font-size: 0.875rem;
            color: ${({theme }) => theme.colors["white-span"]};
            position: relative;

            span{
                background: ${({theme}) => theme.colors["base-black"]};
                padding-inline: .5rem;
            }

            

        
            
        }
   
    }
`

export const AboutContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 7rem;
`

export const ImageSide = styled.section`
    margin-top: 5rem;
    display: flex;
`

export const TextSide = styled.section`
    margin-top: 7rem;

    div{
        display: flex;
        align-items: center;
        gap: 0.8rem;


        h3{
            font-weight: 400;
            font-size: 1.125rem;
            line-height: 1.375rem;
        }
    }

    aside{
        margin-top: 3.125rem;

        h1{
            font-size: 2.75rem;
            font-weight: 700;
            line-height: 3.125rem;
        }

        p{
            font-size: 1.125rem;
            font-weight: 500;
            line-height: 3.125rem;
            margin-bottom: 2rem;
            color: ${({theme}) => theme.colors["second-white"]};
        }

        span{
            

            font-size: 1.125rem;
            font-weight: 400;
            line-height: 1.625rem;
            color: rgba(255, 255, 255, 0.65);
        }
    }

`


export const FooterAbout = styled.div`
    margin-top: 5rem;
    display: flex;
    align-items: center;
    
    
    color: rgba(255, 255, 255, 0.65);

    .divisor{
        content: "";
        height: 2.3rem;
        border-right: 2px solid rgba(255, 255, 255, 0.65);
        margin-left: 2rem;
    }

    span{
        margin-left: 2rem;
        font-weight: 300;
    }

    
    
`

export const SocialButtons = styled.div`
    display: flex;
    align-items: center;


    button{
        background: none;
        border: 1px solid ${({theme}) => theme.colors["three-white"]};
        width: 3.125rem;
        height: 3.125rem;
        color: ${({theme }) => theme.colors["base-white"]};
        transition: .4s ease;
        
        &:hover{
            filter: brightness(.2);
        }
   


    }
`




