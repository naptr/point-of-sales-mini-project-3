import React from 'react';

import '@app/assets/css/Logo/logo.css';


const NeatLogo = ({ height, color}) => {

  return (
    <>
      <svg style={{ height: height }} viewBox="0 0 132 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="hover:fill-current text-purple-500 transition-colors duration-300" d="M9.032 11.32L3.464 43H0.264L3.656 23.672C5.576 12.7067 6.536 7.07467 6.536 6.776C6.536 4.04533 4.89333 2.68 1.608 2.68H1.288L1.608 0.759998H6.088C8.47733 0.759998 10.376 1.08 11.784 1.72C13.192 2.31733 14.28 3.27733 15.048 4.6L32.584 30.2L37.768 0.759998H40.968L33.48 43.192H30.536L9.032 11.32ZM55.013 43.64C51.173 43.64 48.165 42.5093 45.989 40.248C43.813 37.9867 42.725 35.0213 42.725 31.352C42.725 28.0667 43.4503 24.9733 44.901 22.072C46.3943 19.128 48.485 16.76 51.173 14.968C53.9037 13.176 57.0183 12.28 60.517 12.28C64.3143 12.28 67.2583 12.984 69.349 14.392C71.4397 15.7573 72.485 17.656 72.485 20.088C72.485 23.5013 71.0557 26.04 68.197 27.704C65.3383 29.368 61.9463 30.2 58.021 30.2H51.301C51.045 31.5227 50.917 32.7173 50.917 33.784C50.917 36.088 51.4077 37.8373 52.389 39.032C53.3703 40.184 54.7357 40.76 56.485 40.76C58.533 40.76 60.325 40.312 61.861 39.416C63.397 38.4773 64.9543 37.1547 66.533 35.448L68.261 36.92C66.6823 38.84 64.8477 40.44 62.757 41.72C60.709 43 58.1277 43.64 55.013 43.64ZM58.533 27.32C60.1117 27.32 61.3917 26.5307 62.373 24.952C63.3543 23.3733 63.845 21.6667 63.845 19.832C63.845 18.296 63.461 17.144 62.693 16.376C61.9677 15.5653 61.0717 15.16 60.005 15.16C55.909 15.16 53.1783 19.2133 51.813 27.32H58.533ZM86.297 43.64C82.6277 43.64 79.8543 42.5733 77.977 40.44C76.0997 38.3067 75.161 35.5333 75.161 32.12C75.161 29.048 75.8223 25.976 77.145 22.904C78.5103 19.832 80.4517 17.2933 82.969 15.288C85.529 13.2827 88.473 12.28 91.801 12.28C94.0197 12.28 95.769 12.8773 97.049 14.072C97.689 14.6267 98.1797 15.2027 98.521 15.8H98.841L101.593 12.92H107.033L102.873 36.6L101.785 43H96.345L94.553 40.12H94.233C93.721 40.76 93.0383 41.3573 92.185 41.912C90.5637 43.064 88.601 43.64 86.297 43.64ZM88.089 40.76C88.985 40.76 89.7957 40.5893 90.521 40.248C91.2463 39.864 91.993 39.352 92.761 38.712C93.401 38.1573 93.9983 37.4533 94.553 36.6L97.625 19.32C97.369 18.552 97.0063 17.8693 96.537 17.272C95.4703 15.864 94.1477 15.16 92.569 15.16C90.521 15.16 88.8143 16.2693 87.449 18.488C86.1263 20.664 85.145 23.224 84.505 26.168C83.9077 29.112 83.609 31.6507 83.609 33.784C83.609 38.4347 85.1023 40.76 88.089 40.76ZM120.141 43.64C117.581 43.64 115.618 43.064 114.253 41.912C112.93 40.7173 112.269 38.968 112.269 36.664C112.269 36.3227 112.503 34.6587 112.973 31.672C113.485 28.6427 114.402 23.352 115.725 15.8H111.885L112.397 12.92H116.237L117.26 7.16L121.165 3.32H126.285L124.557 12.92H131.597L131.085 15.8H124.045C121.613 29.4107 120.397 36.6427 120.397 37.496C120.397 38.6907 120.61 39.544 121.037 40.056C121.506 40.5253 122.167 40.76 123.021 40.76C124.301 40.76 125.538 40.4827 126.733 39.928C127.117 39.7573 127.65 39.4587 128.333 39.032L128.909 40.824C128.397 41.2507 127.65 41.72 126.669 42.232C124.706 43.1707 122.53 43.64 120.141 43.64Z" fill={color} />
      </svg>
    </>
  );
}

export default NeatLogo;