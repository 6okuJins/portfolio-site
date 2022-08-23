import {useEffect} from 'react';
import {  TitleSVG } from '../../assets/svg';
import { TitleStyle } from '../../styles'
import KUTE from 'kute.js';
const Title = () => {
  useEffect(() => {
    const tween = KUTE.fromTo('#circle', {path:'#circle'}, {path: '#rectangle'}, {morphPrecision: 6, easing: 'easingQuadraticInOut'});
    setTimeout(() => tween.start(), 1500);
  }, []);
  return (<div className={TitleStyle.Title}>
    <TitleSVG />
  </div>);
}
export default Title;