import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        position: absolute;

        top: 50rem;

        p{
            font-weight: 500;
            font-size: 0.875rem;
            color: ${({theme}) => theme.colors["white-span"]};
            display: flex;
            align-items: center;


            &::before{
                content: "";
                background: rgba(255,255,255,.16);
                height: 1px;
                display: block;
                width: 100%;
                position: absolute;
                right: 102%;
            }

        }
    }
`