import { createGlobalStyle } from "styled-components";

export const Typography = createGlobalStyle`
 .h1 {
    /* font-size: calc(6.4rem * var(--text-multiplier)); */
    font-size: clamp(3.2rem, 4.923vw, 6.4rem);
    font-weight: 700;
    line-height: 120%;
 }

 .h2 {
    /* font-size: calc(5rem * var(--text-multiplier)); */
    font-size: clamp(2.5rem, 3.846vw, 5rem);
    font-weight: 700;
    line-height: 120%;
 }

 .h3 {
    /* font-size: calc(3.8rem * var(--text-multiplier)); */
    font-size: clamp(1.9rem, 2.923vw, 3.8rem);
    font-weight: 700;
    line-height: 120%;
 }

 .h4 {
    /* font-size: calc(2.8rem * var(--text-multiplier)); */
    font-size: clamp(1.4rem, 2.154vw, 2.8rem);
    font-weight: 700;
    line-height: 120%;
 }

 .h5 {
    /* font-size: calc(2.2rem * var(--text-multiplier)); */
    font-size: clamp(1.1rem, 1.692vw, 2.2rem);
    font-weight: 700;
    line-height: 120%;
 }

 .h6 {
    /* font-size: calc(1.6rem * var(--text-multiplier)); */
    font-size: clamp(.8rem, 1.231vw, 1.6rem);
    font-weight: 700;
    line-height: 120%;
 }

 .p1 {
    /* font-size: calc(2.4rem * var(--text-multiplier)); */
    font-size: clamp(1.2rem, 1.846vw, 2.4rem);
    font-weight: 500;
    line-height: 150%;
 }

 .p2 {
    /* font-size: calc(2rem * var(--text-multiplier)); */
    font-size: clamp(1rem, 1.538vw, 2rem);
    font-weight: 500;
    line-height: 150%;
 }

 .p3 {
    /* font-size: calc(1.6rem * var(--text-multiplier)); */
    font-size: clamp(.8rem, 1.231vw, 1.6rem);
    font-weight: 500;
    line-height: 150%;
 }

 .p4 {
    /* font-size: calc(1.2rem * var(--text-multiplier)); */
    font-size: clamp(.6rem, 0.923vw, 1.2rem);
    font-weight: 500;
    line-height: 150%;
 }
`;
