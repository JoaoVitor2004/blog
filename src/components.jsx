import styled from "styled-components";

export const Img = styled.img`
    width: ${(prop) => prop.largura ? prop.largura : '100%'};
    margin-bottom: 20px;
    border-radius: 10px;
`;

export const Title = styled.h1`
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 900;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.colors.yellow};
    }
`;

export const Avatar = styled.img`
    width: 12px;
    height: 12px;
    border-radius: 50%;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
`;