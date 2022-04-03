import { createGlobalStyle } from "styled-components";

export const Typography = createGlobalStyle`
 .h1 {
    font-size: calc(6.4rem * var(--text-multiplier));
    font-weight: 700;
    line-height: 120%;
 }

 .h2 {
    font-size: calc(5rem * var(--text-multiplier));
    font-weight: 700;
    line-height: 120%;
 }

 .h3 {
    font-size: calc(3.8rem * var(--text-multiplier));
    font-weight: 700;
    line-height: 120%;
 }

 .h4 {
    font-size: calc(2.8rem * var(--text-multiplier));
    font-weight: 700;
    line-height: 120%;
 }

 .h5 {
    font-size: calc(2.2rem * var(--text-multiplier));
    font-weight: 700;
    line-height: 120%;
 }

 .h6 {
    font-size: calc(1.6rem * var(--text-multiplier));
    font-weight: 700;
    line-height: 120%;
 }

 .p1 {
    font-size: calc(2.4rem * var(--text-multiplier));
    font-weight: 500;
    line-height: 150%;
 }

 .p2 {
    font-size: calc(2rem * var(--text-multiplier));
    font-weight: 500;
    line-height: 150%;
 }

 .p3 {
    font-size: calc(1.6rem * var(--text-multiplier));
    font-weight: 500;
    line-height: 150%;
 }

 .p4 {
    font-size: calc(1.2rem * var(--text-multiplier));
    font-weight: 500;
    line-height: 150%;
 }
`;
