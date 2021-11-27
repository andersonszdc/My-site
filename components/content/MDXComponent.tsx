import Image from 'next/image';
import CustomCode, { Pre } from './CustomCode';
import TechIcons from '../TechIcons';
import CustomLink from '../links/CustomLink';

const MDXComponents = {
    a: CustomLink,
    Image,
    pre: Pre,
    code: CustomCode,
    TechIcons
}

export default MDXComponents