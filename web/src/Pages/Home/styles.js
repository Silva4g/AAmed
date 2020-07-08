import styled from 'styled-components';

export const Container = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    align-content: space-between;

    img {
        width: 800px;
    }
`;
export const Main = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 100px;

    h2{
        color: #ccc;
        margin-left: 15%;
    }
    img{
        width: 600px;
    }
`;