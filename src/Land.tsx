import styled from 'styled-components';
import { theme } from './theme';
import src from './assets/cards.png';

export const Land = () => {
    return (
        <SContainer>
            <SGradientA />
            <SGradientB />
            <SContent>
                <STitle>
                    <SRedText>card</SRedText>
                    <SBlueText>maker</SBlueText>
                </STitle>
                <SImage src={src} />
                <EnterButton>Start creating cards for free</EnterButton>
            </SContent>
            <SBottom>Features</SBottom>
        </SContainer>
    );
};

const SContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: ${theme.colors.primary.main};
`;

const SContent = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing(8)};
`;

const STitle = styled.div`
    display: flex;
    text-transform: capitalize;
    font-size: 80px;
    gap: ${theme.spacing(2)};
`;

const SRedText = styled.span`
    color: ${theme.colors.secondary.main};
`;

const SBlueText = styled.span`
    color: ${theme.colors.primary.main};
`;

const SImage = styled.img`
    height: 40%;
`;

const EnterButton = styled.a`
    border: 0;
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.primary.dark};
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    cursor: pointer;
    border-radius: ${theme.borderRaduis(1)};
    text-decoration: none;
    font-size: 30px;

    &:hover {
        background-color: ${theme.colors.secondary.main};
    }
`;

const SGradientA = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background: radial-gradient(
        circle at 100% 0%,
        ${theme.colors.secondary.main} 0%,
        rgba(0, 0, 0, 0) 75%
    );
`;

const SGradientB = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background: radial-gradient(
        circle at 0% 100%,
        ${theme.colors.primary.dark} 0%,
        rgba(0, 0, 0, 0) 80%
    );
`;

const SBottom = styled.div`
    width: 100vw;
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.background.main};
    border-radius: 100% 100% 0 0;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 30px;
    padding: ${theme.spacing(1)} 0;
`;
