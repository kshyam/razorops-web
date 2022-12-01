import * as React from 'react';
import Box from '@mui/material/Box';
import { font1, font5, font6 } from '../../assets/globalStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

const MainContainer = styled('div')`
    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 40px 80px 80px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 20px 50px 50px 50px;
    }

    @media (min-width: 1535px) {
        padding: 50px 100px 100px 100px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 50px 100px 100px 100px;
    }

    @media (max-width: 600px) {
        padding: 20px 40px 40px 40px;
    }
`;

const Title = styled('span')`
    ${font5};
    font-size: 60px;
    line-height: 70px;
    color: #18204c;
    white-space: pre-wrap;
    text-align: center;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 34px;
        line-height: 39px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 34px;
        line-height: 39px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 29px;
        line-height: 32px;
    }

    @media (max-width: 599px) {
        font-size: 24px;
        line-height: 27px;
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
        width: ${(props) => (props.desc ? '400px' : '-webkit-fill-available')};
    }
`;

const content = [
    {
        id: 1,
        title: 'Q. How do I get started?',
        sub: 'Getting started with Razorops is easy, you can have a look quick look on <a style="text-decoration: underline;" href="https://docs.razorops.com/getting_started/"> Documents </a> and signup for razorops.<br><br>1. <a style="text-decoration: underline;" href="https://dashboard.razorops.com/users/sign_in"> Signup </a> Razorops, Create your first Pipeline project<br>2. Add .razorops.yaml to your source code root directory<br>3. Define your Pipeline <a style="text-decoration: underline;" href="https://docs.razorops.com/config/spec/"> (Click here to Learn) </a><br>4. Commit and push your source code<br>5. This new commit will trigger your pipeline<br>6. Still need help <a style="text-decoration: underline;" href="https://razorops.com/schedule-demo"> Schedule a Demo </a>'
    },
    {
        id: 2,
        title: 'Q. Which source code management services are supported?',
        sub: 'Razorops supports major code-hosting services like GitHub, Bitbucket and Gitlab'
    },
    {
        id: 3,
        title: 'Q. How do you handle upgrading or canceling a subscription?',
        sub: 'You can change or cancel your subscription at any time from your dashboard.'
    },
    {
        id: 4,
        title: 'Q. Do your have something custom plan?',
        sub: 'Most of our customers find Razorops SAAS environment covers their usecases. if you need extra support, hosting preferences or features, our support team will help you.'
    },
    {
        id: 5,
        title: 'Q. I have more questions ?',
        sub: 'Most of our customers find Razorops SAAS environment covers their usecases. if you need extra support, hosting preferences or features, our support team will help you.'
    }
];

export default function FrequentlyAskedQuestions({ desc }) {
    const [value, setValue] = React.useState(1);

    const handleChange = (id) => {
        if (value === id) {
            setValue(0);
        } else {
            setValue(id);
        }
    };

    return (
        <MainContainer>
            <TextContainer>
                <Title>{'Frequently Asked Questions'}</Title>
                {desc && <Desc>{desc}</Desc>}
            </TextContainer>
            <Container>
                {content.map((i) => (
                    <ContentContainer desc={desc} id={i.id}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Label>{i.title}</Label>
                            <IconButton onClick={() => handleChange(i.id)}>
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
        </MainContainer>
    );
}
