import {useEffect} from 'react';
import { MorphingCircleSVG , DominicSVG } from '../../assets/svg';
import { TitleStyle } from '../../styles';
import KUTE from 'kute.js';
import {GradientPath} from 'gradient-path';

const Title = () => {
  useEffect(() => {
    //const tween = KUTE.fromTo('#circle', {path:'#circle'}, {path: '#rectangle'}, {morphPrecision: 6, easing: 'easingQuadraticInOut'});
    //setTimeout(() => tween.start(), 1500);

    const gp = new GradientPath({
      path: document.querySelector('#vector1'),
      segments: 600,
      samples: 5,
      precision: 4 // Optional
    });
    
    gp.render({
      type: 'path',
      stroke: [
        { color: '#C6FFDD', pos: 0 },
        { color: '#FBD786', pos: 0.25 },
        { color: '#F7797D', pos: 0.5 },
        { color: '#6DD5ED', pos: 0.75 },
        { color: '#C6FFDD', pos: 1 }
      ],
      fill: [
        { color: '#C6FFDD', pos: 0 },
        { color: '#FBD786', pos: 0.25 },
        { color: '#F7797D', pos: 0.5 },
        { color: '#6DD5ED', pos: 0.75 },
        { color: '#C6FFDD', pos: 1 }
      ],
      width: 0,
      strokeWidth: 3,
    });
    

  }, []);
  return (<div className={TitleStyle.Title}>
    <MorphingCircleSVG id={TitleStyle.morphingCircle} />
    <DominicSVG id={TitleStyle.Dominic} />
  </div>);
}
export default Title;