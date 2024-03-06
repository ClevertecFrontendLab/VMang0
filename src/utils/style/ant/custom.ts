import { Button, Rate } from 'antd';
import styled from 'styled-components';
import { CustomButtonType, CustomRateType } from '@utils/style/ant/types';

const primaryLight4 = '#85a5ff';
const primaryLight5 = '#597ef7';
const primaryLight6 = '#2f54eb';
const characterLightPrimaryInverse = '#fff';
const characterLightDisable25 = '#bfbfbf';
const characterLightBackground = '#f5f5f5';
const characterLightBorder = '#d9d9d9';
const characterLightWarning = '#faad14';
const characterLightTitle85 = '#262626';

export const CustomRate = styled<CustomRateType>(Rate)`
    font-size: ${props => props.size || '14px'};
    height: ${props => props.height || 'auto'};
    width: auto;
    &, .ant-rate-star-second, .ant-rate-star-first {
        color: ${characterLightWarning};
        display: flex;
        align-items: center;
    }
    .ant-rate-star {
        margin-right: ${props => props.right || '6px'};
        max-height: 100%;
        display: flex;
        align-items: center;
    }
`;

export const CustomButton = styled<CustomButtonType>(Button)`
    width: ${props => props.width?.large || 'auto'};
    height: ${props => props.height?.large || '40px'};
    padding: ${props => props.padding?.large};
    font-size: ${props => props.size?.large || '14px'};
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 575px) {
        width: ${props => props.width?.small || props.width?.large || 'auto'};
        height: ${props => props.height?.small || props.height?.large || '40px'};
        padding: ${props => props.padding?.small || props.padding?.large};
        font-size: ${props => props.size?.small || props.size?.large || '14px'};
    }

`;

export const PrimaryButton = styled(CustomButton)`
    background-color: ${primaryLight6};
    border-color: ${primaryLight6};
    color: ${characterLightPrimaryInverse};
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.04);
    &:hover,
    &:focus-visible,
    &:focus {
        background: ${primaryLight4};
        border-color: ${primaryLight4};
        color: ${characterLightPrimaryInverse};
    }
    &:disabled {
        border: 1px solid ${characterLightBorder};
        box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.02);
        background: ${characterLightBackground};
        color: ${characterLightDisable25};
    }
`;

export const LinkButton = styled<string | undefined>(CustomButton)`
    color: ${props => props.color || primaryLight6};
    border: none;
    background-color: transparent;
    &:hover,
    &:focus-visible,
    &:focus {
        color: ${props => props.color || primaryLight6};
        background-color: transparent;
    }
    &:disabled {
        color: ${characterLightDisable25};
    }
`;

export const OutlineButton = styled(CustomButton)`
    color: ${characterLightTitle85};
    &:hover, &:focus-visible {
        color: ${primaryLight5};
        border-color: ${primaryLight5};
    }
`;
