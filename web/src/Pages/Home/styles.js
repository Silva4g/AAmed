import styled, { css } from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-content: space-between;

    img {
        width: 1000px;
    }
`;
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2{
        color: #ccc;
    }
    img{
        width: 600px;
    }
`;