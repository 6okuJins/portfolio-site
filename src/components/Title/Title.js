import {useEffect} from 'react';
import { MorphingCircleSVG , DominicSVG } from '../../assets/svg';
import { TitleStyle } from '../../styles';
import KUTE from 'kute.js';
import {GradientPath} from 'gradient-path';

const Title = () => {
  useEffect(() => {
    const tween = KUTE.fromTo('#circle', {path:'#circle'}, {path: '#rectangle'}, {morphPrecision: 6, easing: 'easingQuadraticInOut'});
    setTimeout(() => tween.start(), 1500);


    

  }, []);
  return (<div className={TitleStyle.Title}>
    <MorphingCircleSVG id={TitleStyle.morphingCircle} />
    <DominicSVG id={TitleStyle.Dominic} />
  </div>);
}
export default Title;