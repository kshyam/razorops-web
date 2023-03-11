import * as React from 'react';
import { font1, font6 } from '../../assets/globalStyles';
import img from '../../assets/images/about-page/aboutImg.svg';
import styled from '@emotion/styled';
import { Grid, List } from '@mui/material';

const TopContainer = styled(Grid)`
    display: flex;
    justify-content: space-around;
    padding: 0px 0px 40px 0px;

    @media (max-width: 600px) {
        padding: 20px 0px 0px 0px;
    }
`;

const Desc = styled('span')`
    ${font6};
    font-size: 16px;
    line-height: 28px;
    color: #5b6987;
`;

const Sub = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 25px;
    color: #5b6987;

    @media (max-width: 1199px) {
        font-size: 14px;
        line-height: 24px;
    }
`;

export default function Details() {
    return (
        <TopContainer container spacing={3}>
            <Grid item md={12} lg={5}>
                <Grid container spacing={3} direction={'column'}>
                    <Grid item>
                        <Desc>
                            Razorops is a complete container native CI/CD solution handling all
                            aspects of the software lifecycle from the moment a commit is created
                            until it is deployed to production.
                        </Desc>
                    </Grid>
                    <Grid item>
                        <List
                            sx={{
                                listStyleType: 'disc',
                                color: '#5b6987',
                                '& .MuiListItem-root': {
                                    display: 'list-item'
                                }
                            }}>
                            <Grid container>
                                <Grid item>
                                    <Sub>Key features of Razorops are-</Sub>
                                </Grid>
                                <Grid style={{ padding: '0px 10px' }} item>
                                    <ul>
                                        <li
                                            style={{
                                                listStyleType: 'disc',
                                                padding: '5px 0px'
                                            }}>
                                            <Sub>
                                                Earn a 10% referral commission on every new
                                                subscription using your unique referral link.
                                            </Sub>
                                        </li>
                                        <li
                                            style={{
                                                listStyleType: 'disc',
                                                padding: '5px 0px'
                                            }}>
                                            <Sub>
                                                Each New Subscriber joining through your referral
                                                link will receive a referral bonus on their first
                                                subscription plan.
                                            </Sub>
                                        </li>
                                        <li
                                            style={{
                                                listStyleType: 'disc',
                                                padding: '5px 0px'
                                            }}>
                                            <Sub>
                                                Referral commission & Referral bonus will be 10% of
                                                the subscription plan selected by the subscriber.
                                            </Sub>
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </List>
                    </Grid>
                    <Grid item>
                        <Sub>
                            In a nutshell- Razorops is a container native continuous delivery
                            platform to automate your workflow from development to production in a
                            few simple steps.
                        </Sub>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={8} lg={5}>
                <img src={img} alt="" />
            </Grid>
        </TopContainer>
    );
}
