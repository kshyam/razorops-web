import { css } from '@emotion/react';

const poppinsFont = {
    fontFamily: 'Poppins'
};

const montserratFont = {
    fontFamily: 'Montserrat'
};

const montserratMedium = {
    fontFamily: 'MontserratMedium'
};

const montserratSemiBold = {
    fontFamily: 'MontserratSemiBold'
};

const primary = '#345EEF';

const bg1 = '#ffffff';

const color1 = '#18204C';
const color2 = '#5B5B5B';
const color3 = '#7C819B';
const color4 = '#345EEF';

const gradient1 = 'linear-gradient(29.4deg, #580AFF 1.02%, #0AD3FF 95.64%)';

// font size

const fontSize12 = '12px';
const fontSize15 = '15px';
const fontSize14 = '14px';
const fontSize16 = '16px';
const fontSize18 = '18px';
const fontSize20 = '20px';
const fontSize24 = '24px';
const fontSize30 = '30px';

// font weight
const fontWeight300 = 300;
const fontWeight600 = 600;
const fontWeight700 = 700;
const fontWeight400 = 400;
const fontWeight500 = 500;
const fontWeight800 = 800;
const fontWeight900 = 900;

// line height
const lineHeight17 = '17px';
const lineHeight20 = '20px';
const lineHeight22 = '22px';
const lineHeight24 = '24px';
const lineHeight26 = '26px';
const lineHeight27 = '27px';
const lineHeight29 = '29px';
const lineHeight32 = '32px';

// letter spacing
const letterSpacing1 = '0.1px';
const letterSpacing2 = '0.15px';
const letterSpacing3 = '0.4px';

//  font and style
const headingFont = css({
    ...montserratFont,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '80px',
    lineHeight: '90px',
    color: '#18204C'
});

const font1 = css({
    ...montserratFont,
    fontWeight: fontWeight500,
    fontStyle: 'normal'
});

const font2 = css({
    ...montserratMedium,
    fontWeight: fontWeight500,
    fontStyle: 'normal'
});

const font3 = css({
    ...montserratMedium,
    fontWeight: fontWeight700,
    fontStyle: 'normal'
});

const font4 = css({
    ...poppinsFont,
    fontWeight: fontWeight600,
    fontStyle: 'normal'
});

const font5 = css({
    ...montserratMedium,
    fontWeight: fontWeight600,
    fontStyle: 'normal'
});

const font6 = css({
    ...montserratFont,
    fontWeight: fontWeight600,
    fontStyle: 'normal'
});

const font7 = css({
    ...montserratFont,
    fontWeight: fontWeight700,
    fontStyle: 'normal'
});

const font8 = css({
    ...montserratFont,
    fontWeight: fontWeight400,
    fontStyle: 'normal'
});

const font9 = css({
    ...montserratMedium,
    fontWeight: fontWeight900,
    fontStyle: 'normal',
    fontSize: fontSize30
});

const font10 = css({
    ...montserratFont,
    fontWeight: fontWeight800,
    fontStyle: 'normal'
});

const font11 = css({
    ...montserratSemiBold,
    fontWeight: fontWeight800,
    fontStyle: 'normal'
});

export {
    primary,
    bg1,
    gradient1,
    color1,
    color2,
    color3,
    color4,
    headingFont,
    font1,
    font2,
    font3,
    font4,
    font5,
    font6,
    font7,
    font8,
    font9,
    font10,
    font11,
    fontWeight600,
    fontWeight700,
    fontWeight400,
    fontWeight500,
    fontWeight300,
    fontWeight800,
    fontWeight900,
    fontSize12,
    fontSize14,
    fontSize15,
    fontSize16,
    fontSize18,
    fontSize20,
    fontSize24,
    fontSize30,
    lineHeight17,
    lineHeight20,
    lineHeight22,
    lineHeight24,
    lineHeight26,
    lineHeight27,
    lineHeight29,
    lineHeight32,
    letterSpacing1,
    letterSpacing2,
    letterSpacing3
};
