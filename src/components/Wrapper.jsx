import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    width: 400px;
    max-width: 90%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 10px 10px 0 black;
    border: 1px solid black;

    & span {
        display: block;
        background-color: ${({theme}) => theme.colors.yellow};
        margin-bottom: 10px;
        padding: 6px;
        color: black;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 900;
        width: 85px;
        max-width: 90%;
        text-align: center;
    }

    & p {
        font-weight: ${(prop) => prop.weight ? prop.weight : '300'};
        margin-bottom: 20px;
        font-size: ${({theme}) => theme.size};
        line-height: 20px;
    }
`;