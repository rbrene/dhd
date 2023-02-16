import { createGlobalStyle } from 'styled-components';


const Colors = createGlobalStyle`
:root {
    --dark-primary: #03030D;
    --dark-primary-hsl: 240 63% 3%;
    --dark-accent-primary: #141726;
    --dark-accent-secondary: #2E3959;
    --dark-accent-secondary-hsl: 225 31% 26%;
    --light-primary: #d5e0ff;
    --light-accent: #A6A6A6;
    --light-secondary-accent: #cbd8ff;
    --light-secondary-accent-hsl: 225 100% 90%;
    --accent: #5576da;
    --accent-hsl: 225 64% 59%;
    --accent-secondary: #83a2ff;
    --accent-secondary-hsl: 225 100% 76%;
}
/* Color Theme Swatches in Hex 
.Addictions-Design-1-hex { color: #03030D; }
.Addictions-Design-2-hex { color: #141726; }
.Addictions-Design-3-hex { color: #2E3959; }
.Addictions-Design-4-hex { color: #F2F2F2; }
.Addictions-Design-5-hex { color: #A6A6A6; }
*/

/* Color Theme Swatches in RGBA 
.Addictions-Design-1-rgba { color: rgba(2, 3, 12, 1); }
.Addictions-Design-2-rgba { color: rgba(19, 22, 38, 1); }
.Addictions-Design-3-rgba { color: rgba(46, 57, 89, 1); }
.Addictions-Design-4-rgba { color: rgba(242, 242, 242, 1); }
.Addictions-Design-5-rgba { color: rgba(165, 165, 165, 1); }
*/

/* Color Theme Swatches in HSLA 
.Addictions-Design-1-hsla { color: hsla(236, 66, 3, 1); }
.Addictions-Design-2-hsla { color: hsla(230, 31, 11, 1); }
.Addictions-Design-3-hsla { color: hsla(225, 31, 26, 1); }
.Addictions-Design-4-hsla { color: hsla(0, 0, 95, 1); }
.Addictions-Design-5-hsla { color: hsla(0, 0, 65, 1); }
*/

`;

export default Colors;