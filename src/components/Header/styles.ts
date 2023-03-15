import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    background: ${({theme }) => theme.colors["base-black"]};
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    gap: 3.25rem;

    a{
        color: ${({theme}) => theme.colors["base-white"]};
        position: relative;

        &.active{
            font-weight: 700;
        }
        &.active::after{
            content: '';
            height: 2px;
            width: 40%;
            position: absolute;
            bottom: -4px;
            left: 0;
            background: ${({theme}) => theme.colors["base-red"]};

        }
    }




`
export const HeaderButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-width: 2.6rem;
    height: 2.6rem;
    border: 1px solid ${({theme }) => theme.colors["three-white"]};
    padding: 0 2.125rem;
    position: relative;
    background: ${({theme}) => theme.colors["base-black"]};
    color: ${({theme}) => theme.colors["base-white"]};
    font-weight: 700;
    transition: 650ms ease;

    &:hover{
        background: ${({theme}) => theme.colors["base-red"]};
        border-color: ${({theme}) => theme.colors["base-red"]};
        filter: drop-shadow(0 0 1.5em ${({theme}) => theme.colors["base-red"]});
        

    }

`
