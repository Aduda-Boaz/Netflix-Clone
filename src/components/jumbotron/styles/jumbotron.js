import styled from 'styled-components/macro';

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Pane = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;
export const Title = styled.h1`
    font-size: 35px;
    line-weight: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px) {
        font-size: 30px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: normal;
    line-weight: normal;

    @media (max-width: 600px) {
        font-size: 15px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: black;
  overflow: hidden;
`;


export const Container =styled.div`
    @media (max-width: 1000px) {
        ${Item}: last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;