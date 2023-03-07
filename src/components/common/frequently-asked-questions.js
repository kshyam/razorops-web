import * as React from 'react';
import Box from '@mui/material/Box';
import { font1, font5, font6 } from '../../assets/globalStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

const Title = styled('span')`
    ${font5};
    font-size: 38px;
    line-height: 48px;
    color: #18204c;
    white-space: pre-wrap;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 28px;
        line-height: 30px;
    }
`;

const Desc = styled('span')`
    padding: 20px;
    ${font6};
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #5b6987;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 20px;
        line-height: 27px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 19px;
        line-height: 27px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 599px) {
        font-size: 14px;
        line-height: 27px;
    }
`;

const TextContainer = styled('div')`
    padding: 20px 60px 40px 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Label = styled('span')`
    ${font5};
    font-size: 30px;
    line-height: 40px;
    color: #002c9b;
    text-align: left;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 24px;
        line-height: 37px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 24px;
        line-height: 27px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 20px;
        line-height: 24px;
    }

    @media (max-width: 599px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

const Sub = styled('span')`
    padding: 20px 0px 0px 0px;
    ${font1};
    text-align: left;
    font-size: 18px;
    line-height: 28px;
    color: #5b6987;
    @media (min-width: 600px) and (max-width: 1199px) {
        padding: 10px 0px 0px 0px;
        font-size: 14px;
        line-height: 22px;
    }

    @media (max-width: 599px) {
        padding: 10px 0px 0px 0px;
        font-size: 12px;
        line-height: 20px;
    }
`;

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
`;

const ContentContainer = styled(Box)`
    padding: 30px;
    margin: 15px;
    width: ${(props) => (props.desc ? '1000px' : '-webkit-fill-available')};
    background: #f9fafe;
    border-radius: 14px;

    @media (min-width: 1535px) {
        width: ${(props) => (props.desc ? '1200px' : '-webkit-fill-available')};
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        width: ${(props) => (props.desc ? '600px' : '-webkit-fill-available')};
    }

    @media (min-width: 600px) and (max-width: 899px) {
        width: ${(props) => (props.desc ? '500px' : '-webkit-fill-available')};
    }

    @media (max-width: 599px) {
        width: ${(props) => (props.desc ? 'auto' : '-webkit-fill-available')};
    }
`;

export default function FrequentlyAskedQuestions({ content, desc }) {
    const [value, setValue] = React.useState(1);

    const handleChange = (id) => {
        if (value === id) {
            setValue(0);
        } else {
            setValue(id);
        }
    };

    return (
        <div>
            <TextContainer>
                <Title>{'Frequently Asked Questions'}</Title>
                {desc && <Desc>{desc}</Desc>}
            </TextContainer>
            <Container>
                {content.map((i) => (
                    <ContentContainer desc={desc} key={i.id}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                            <Label>{i.title}</Label>
                            <IconButton
                                style={{ height: '50px', width: '50px' }}
                                onClick={() => handleChange(i.id)}>
                                {value === i.id ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                            </IconButton>
                        </Box>
                        <Sub
                            style={{ display: value === i.id ? 'block' : 'none' }}
                            dangerouslySetInnerHTML={{
                                __html: i.sub
                            }}
                        />
                    </ContentContainer>
                ))}
            </Container>
        </div>
    );
}
