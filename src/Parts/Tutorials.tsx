import styled from 'styled-components';
import { theme } from 'theme';

export const Tutorials = () => {
    return (
        <SContainer>
            <STitle>Tutorial</STitle>
            <StyledIframe
                title="youtube tutorial"
                width="750"
                height="500"
                src="https://www.youtube.com/embed/3Kox4Bxaag8"
            ></StyledIframe>
        </SContainer>
    );
};

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const STitle = styled.span`
    margin-top: ${theme.spacing(5)};
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 30px;
    padding: ${theme.spacing(2)} 0;
`;

const StyledIframe = styled.iframe`
    border: 0;
    margin: auto;
`;
