import React from 'react';

type HeroImageProps = {
    url: string
}

const HeroImage: React.FC<HeroImageProps> = ({url}) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 367 409" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <mask id="mask0_337_85" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="367" height="409">
            <path d="M350.424 155.13C374.011 261.393 376.651 312.584 324.152 364.663C271.272 416.743 148.679 430.42 78.6799 364.663C8.68077 298.906 -12.0107 274.837 7.39128 176.991C26.7932 79.1441 106.416 -5.50634 186.306 0.280275C265.816 6.0669 326.837 49.3922 350.424 155.13Z" fill="#16D3E4"/>
        </mask>
        <g mask="url(#mask0_337_85)">
            <rect x="-145.5" y="-30" width="702" height="469" fill="url(#pattern0)"/>
        </g>
        <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#image0_337_85" transform="translate(-0.00100722) scale(0.000244632 0.000366166)"/>
            </pattern>
            <image id="image0_337_85" width="3790" y="160" height="2500" href={url} />
        </defs>
        </svg>
    );
}

export default HeroImage;

