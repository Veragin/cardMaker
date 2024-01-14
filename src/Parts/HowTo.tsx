import styled from 'styled-components';
import { theme } from 'theme';
import excelSrc from 'assets/excel.png';
import sheetIdSrc from 'assets/sheetId.png';

export const HowTo = () => {
    return (
        <SList>
            <SServiceBox>
                <SServiceTitle>File Loader</SServiceTitle>
                <li> Use drag and drop to add image files as a cards </li>
                <li>
                    You can load data from google sheets and create cards from them, look at How to
                    load data from Google Sheet section
                </li>
                <li> You can remove here not wanted cards </li>
                <li> You can upload a card structure, you did exported in the past </li>
            </SServiceBox>
            <SServiceBox>
                <SServiceTitle>Card Maker</SServiceTitle>
                <li> In left corner choose width and height of the card in pixels</li>
                <li> Press "Add new card" button to add new card </li>
                <li>
                    In the top bar next to the logo press on icon to add element (text/shape/image)
                    to the active card
                </li>
                <li>
                    If you select element you can modify it by changing its properties in the right
                    bar
                </li>
                <li>
                    In the left bar under "Layers" you can see list of all elements that are in the
                    card
                </li>
                <li>
                    When your first card is ready press "Copy card" button in the left bar, that
                    will create new card as a copy
                </li>
            </SServiceBox>
            <SServiceBox>
                <SServiceTitle>Global Editor</SServiceTitle>
                <li>The similar as Card Maker but you adjust all banners at once</li>
                <li>
                    Select element you want to adjust and modify its properties, it will apply the
                    change to same elements in every banner
                </li>
                <li>
                    The "same" element mean the element with the same id, therefore you want to use
                    Copy card button or add new element in Global Editor mode
                </li>
                <SLiHighlight>
                    Be careful with that and always make sure you are using the tool you want
                </SLiHighlight>
            </SServiceBox>
            <SServiceBox>
                <SServiceTitle>Pdf Download</SServiceTitle>
                <li>
                    You can download all cards as png images in the zip by pressing on download
                    button right away
                </li>
                <li>Enabling pdf, cards will be downloaded in the pdf so its easy to print them</li>
                <li>With field Orientation, you can choose orientation of the paper A4</li>
                <li>With padding you can configure space on the border of the paper in mm</li>
                <SLiHighlight>
                    IMPORTANT: DPI define how many pixels are in one milimeter (ex: 640x880 with
                    10dpi is 6,4cm width and 8,8cm height)
                </SLiHighlight>
                <li>
                    You can pick one card as a back of cards, this card will be excluded and every
                    second page will be generated only from this card, so you can print cards both
                    sides
                </li>
                <SLiHighlight>
                    IMPORTANT: while changing stats dont forget to PRESS THE ORGANIZE FOR PAPER
                    button, this will prepare cards for the pdf
                </SLiHighlight>
                <li>Press Donwload button to download the pdf</li>
            </SServiceBox>
            <SServiceBox>
                <SServiceTitle>How to control Editor</SServiceTitle>
                <li>
                    The active card is highlighted with a purple border, you can change active card
                    by clicking on them
                </li>
                <li>Use mouse wheel to zoom in and out</li>
                <li>Hold ctrl key and drag move the screen around</li>
                <li>You can use Layer bar on the left side for selecting elements</li>
            </SServiceBox>
            <SServiceBox>
                <SServiceTitle>How to load data from Google Sheet</SServiceTitle>
                <li>Create new google sheet document and open it</li>
                <li>
                    Press on the Share button in the right top corner, under general access pick
                    "Anyone with the link" option and press "Done"
                </li>
                <li>In the first row write the names of the elements</li>
                <li>
                    In the second row write the types of the elements (you can choose "text",
                    "polygon" or "ellipse")
                </li>
                <li>
                    Next rows fill with the data (each row represents a card, each column represents
                    element in the card)
                </li>
                <li>Empty cell means that the element will be missing</li>
                <li>Example:</li>
                <SImg src={excelSrc} />
                <li>In Card Maker service in File Loader press "Load google sheet" button</li>
                <li>Copy sheet id from the url and fill it in the Google Sheet Id field</li>
                <SImg src={sheetIdSrc} />
            </SServiceBox>
        </SList>
    );
};

const SList = styled.ul`
    font-size: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing(3)};
    list-style-position: outside;
    padding: 0;
`;

const SServiceBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1)};
    background-color: ${theme.colors.background.opposite};
    border-radius: ${theme.borderRaduis(2)};
    padding: ${theme.spacing(3)};
    padding-left: ${theme.spacing(6)};
`;

const SServiceTitle = styled.span`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 20px;
    padding-bottom: ${theme.spacing(1)};
`;

const SImg = styled.img`
    width: 100%;
`;

const SLiHighlight = styled.li`
    color: red;
`;
