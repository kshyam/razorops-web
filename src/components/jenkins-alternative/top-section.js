import React from 'react';
import styled from '@emotion/styled';
import bg from '../../assets/images/bg.png';
import { font1, font3, font6, font7 } from '../../assets/globalStyles';
import { Button, Grid, List, ListItem, TextField, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const MainContainer = styled('div')`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 80px 80px 80px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 140px 140px 140px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 100px 100px 100px 100px;
    }

    @media (max-width: 600px) {
        padding: 60px 40px 60px 40px;
    }
`;

const FormContainer = styled('div')`
    position: relative;
    min-width: -webkit-fill-available;
    padding: 40px;
    border-radius: 12px;
    background: #f9fafe;
    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`;

const FormTitle = styled('h1')`
    ${font3};
    font-size: 28px;
    color: #031b4e;
    text-align: center;
`;

const Title = styled('h1')`
    ${font7};
    font-size: 48px;
    line-height: 56px;
    color: #f9fafe;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 48px;
        line-height: 56px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 44px;
        line-height: 53px;
        padding: 20px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 40px;
        line-height: 77px;
        padding: 20px;
    }

    @media (max-width: 600px) {
        font-size: 32px;
        line-height: 48px;
        padding: 20px 0px;
    }
`;

const Desc = styled('div')`
    ${font1};
    font-size: 16px;
    line-height: 28px;
    color: #f9fafe;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 22px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

const Features = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 54px;
    color: #f9fafe;
`;

const Text = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #000000;
`;

const TextGrid = styled(Grid)`
    padding: 40px 50px;
    display: flex;
    flex-direction: column;

    @media (max-width: 599px) {
        padding: 40px 0px;
    }
`;

const SubmitButton = styled(Button)`
    padding: 15px;
    width: 100%;
    text-transform: none;
    background: #0069ff;
    border-radius: 14px;

    &:hover {
        background: #0069ff;
    }
`;

const ButtonText = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #f9fafe;
`;

const styles = {
    helper: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#d32f2f',
        margin: '5px 0px 0px 5px'
    },
    label: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: '14px'
    },
    input: {
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: '15px',
        borderRadius: '6px'
    }
};

export default function TopSection() {
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        designation: '',
        phone: '',
        company: '',
        linkedin: '',
        location: ''
    });
    const [success, setSuccess] = React.useState(false);
    const [code, setCode] = React.useState('+91');
    const [errors, setErrors] = React.useState({});

    const setField = (field, value) => {
        setValues({
            ...values,
            [field]: value
        });
        if (errors[field])
            setErrors({
                ...errors,
                [field]: null
            });
    };

    const validationErrors = () => {
        const { name, email, designation, phone } = values;
        const newErrors = {};

        var checkValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (name === '') {
            newErrors.name = 'Name is mandatory';
        }
        if (email === '') {
            newErrors.email = 'Email is mandatory';
        } else {
            if (!checkValidEmail.test(email)) {
                newErrors.email = 'Enter a valid email';
            }
        }
        if (designation === '') {
            newErrors.designation = 'Designation is mandatory';
        }
        if (phone.slice(code.length).length !== 10) {
            newErrors.phone = 'Enter a valid phone number';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validationErrors();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            await fetch('https://app.blinkcrm.in/api/leads', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    api_key: '19a5c89fb2ef43c1969d00e4554ab99e'
                },
                body: JSON.stringify({
                    lead: {
                        first_name: values.name || '',
                        email: values.email || '',
                        title: values.designation || '',
                        phone: '+' + values.phone || '',
                        company_name: values.company || '',
                        company_linkedin: values.linkedin || '',
                        location: values.location || '',
                        lead_source: 'jenkins_alternative',
                        status: 'Not Sent',
                        campaign_id: '6'
                    }
                })
            })
                .then((response) => {
                    if (response.ok) {
                        setSuccess(true);
                    }
                })

                .catch((err) => {
                    console.log(err);
                });

            setValues({
                name: '',
                email: '',
                designation: '',
                phone: '',
                company: '',
                linkedin: '',
                location: ''
            });
        }
    };

    return (
        <MainContainer>
            <Grid container>
                <TextGrid item xs={12} sm={12} md={7} lg={7}>
                    <Grid container spacing={3} alignItems={'center'}>
                        <Grid item>
                            <Title>The Simplest, Jenkins Alternative</Title>
                        </Grid>
                        <Grid item>
                            <Desc>
                                RazorOps is the simplest Jenkins alternative for developers and
                                software development teams. It's easy to set up and even simpler to
                                use. To top it off, unlike Jenkins, RazorOps is free. You would
                                certainly never return to Jenkins, we bet! Get Started
                            </Desc>
                        </Grid>
                        <Grid item>
                            <List
                                sx={{
                                    listStyleType: 'disc',
                                    color: '#f9fafe',
                                    '& .MuiListItem-root': {
                                        display: 'list-item'
                                    }
                                }}>
                                <Grid container>
                                    <Grid style={{ padding: '0px 10px' }} item>
                                        <ListItem>
                                            <Features>No plugins</Features>
                                        </ListItem>
                                        <ListItem>
                                            <Features>No servers required</Features>
                                        </ListItem>
                                        <ListItem>
                                            <Features>24/7 customer support</Features>
                                        </ListItem>
                                    </Grid>
                                    <Grid style={{ padding: '0px 10px' }} item>
                                        <ListItem>
                                            <Features>No maintenance charges</Features>
                                        </ListItem>
                                        <ListItem>
                                            <Features>Faster releases</Features>
                                        </ListItem>
                                        <ListItem>
                                            <Features>Simpler to use</Features>
                                        </ListItem>
                                    </Grid>
                                </Grid>
                            </List>
                        </Grid>
                    </Grid>
                </TextGrid>
                <Grid item display={'flex'} alignItems={'center'} xs={12} sm={12} md={5} lg={5}>
                    <FormContainer>
                        <div className="mb-10">
                            <FormTitle>Request a call back</FormTitle>
                        </div>
                        {success ? (
                            <Grid
                                style={{ padding: '40px' }}
                                container
                                spacing={3}
                                direction={'column'}
                                justifyContent={'center'}
                                alignItems={'center'}>
                                <Grid item>
                                    <CheckCircleOutlineIcon
                                        style={{ color: '#008000', height: '60px', width: '60px' }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Text>Thank you for filling out the form !!</Text>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid container direction={'column'} spacing={3}>
                                <Grid item md={12}>
                                    <TextField
                                        sx={{
                                            fieldset: {
                                                borderColor: '#DEECFF'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#DEECFF !important'
                                            }
                                        }}
                                        InputProps={{ style: styles.input }}
                                        InputLabelProps={{ style: styles.label }}
                                        FormHelperTextProps={{ style: styles.helper }}
                                        size="small"
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        value={values.name}
                                        error={errors.name}
                                        helperText={errors.name}
                                        label="Name"
                                        onChange={(e) => setField('name', e.target.value)}
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        sx={{
                                            fieldset: {
                                                borderColor: '#DEECFF'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#DEECFF !important'
                                            }
                                        }}
                                        InputProps={{ style: styles.input }}
                                        InputLabelProps={{ style: styles.label }}
                                        FormHelperTextProps={{ style: styles.helper }}
                                        size="small"
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        value={values.email}
                                        error={errors.email}
                                        helperText={errors.email}
                                        label="Email"
                                        onChange={(e) => setField('email', e.target.value)}
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        sx={{
                                            fieldset: {
                                                borderColor: '#DEECFF'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#DEECFF !important'
                                            }
                                        }}
                                        InputProps={{ style: styles.input }}
                                        InputLabelProps={{ style: styles.label }}
                                        FormHelperTextProps={{ style: styles.helper }}
                                        size="small"
                                        required
                                        fullWidth
                                        id="outlined-required"
                                        value={values.designation}
                                        error={errors.designation}
                                        helperText={errors.designation}
                                        label="Designation"
                                        onChange={(e) => setField('designation', e.target.value)}
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <PhoneInput
                                        containerStyle={{
                                            height: '40px'
                                        }}
                                        buttonStyle={{
                                            border: '1px solid #DEECFF',
                                            background: '#f9fafe'
                                        }}
                                        inputStyle={{
                                            height: '40px',
                                            width: '100%',
                                            borderColor: '#DEECFF',
                                            background: '#f9fafe',
                                            fontFamily: 'Montserrat',
                                            fontWeight: '500',
                                            fontStyle: 'normal',
                                            fontSize: '14px'
                                        }}
                                        country={'in'}
                                        placeholder="Phone Number"
                                        value={values.phone}
                                        onChange={(value, data) => {
                                            setField('phone', value);
                                            setCode(data.dialCode);
                                        }}
                                    />
                                    {errors?.phone && (
                                        <Typography style={styles.helper}>
                                            {errors.phone}
                                        </Typography>
                                    )}
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        sx={{
                                            fieldset: {
                                                borderColor: '#DEECFF'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#DEECFF !important'
                                            }
                                        }}
                                        InputProps={{ style: styles.input }}
                                        InputLabelProps={{ style: styles.label }}
                                        size="small"
                                        fullWidth
                                        id="outlined-required"
                                        value={values.company}
                                        label="Company Name"
                                        onChange={(e) => setField('company', e.target.value)}
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        sx={{
                                            fieldset: {
                                                borderColor: '#DEECFF'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#DEECFF !important'
                                            }
                                        }}
                                        InputProps={{ style: styles.input }}
                                        InputLabelProps={{ style: styles.label }}
                                        size="small"
                                        fullWidth
                                        id="outlined-required"
                                        value={values.linkedin}
                                        label="Company  Website / Company Linkedin"
                                        onChange={(e) => setField('linkedin', e.target.value)}
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        sx={{
                                            fieldset: {
                                                borderColor: '#DEECFF'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#DEECFF !important'
                                            }
                                        }}
                                        InputProps={{ style: styles.input }}
                                        InputLabelProps={{ style: styles.label }}
                                        size="small"
                                        fullWidth
                                        id="outlined-required"
                                        value={values.location}
                                        label="Location"
                                        onChange={(e) => setField('location', e.target.value)}
                                    />
                                </Grid>
                                <Grid item md={12}>
                                    <SubmitButton onClick={handleSubmit}>
                                        <ButtonText>Submit</ButtonText>
                                    </SubmitButton>
                                </Grid>
                            </Grid>
                        )}
                    </FormContainer>
                </Grid>
            </Grid>
        </MainContainer>
    );
}
