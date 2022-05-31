import * as React from 'react';
import Svg, { SvgProps, Circle, Mask, G, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={300} height={300} viewBox="0 0 582 582" fill="none" {...props}>
      <Circle cx={291} cy={291} r={291} fill="#ECAD7A" />
      <Mask id="prefix__a" x={0} y={0} width={582} height={582}>
        <Circle cx={291} cy={291} r={291} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38 294c6.627 0 12 5.373 12 12s-5.373 12-12 12h-156c-6.627 0-12-5.373-12-12s5.373-12 12-12H38zm220 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-78v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h160c6.627 0 12 5.373 12 12s-5.373 12-12 12H83c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-30c-6.627 0-12-5.373-12-12s5.373-12 12-12h156zM53 390c6.627 0 12 5.373 12 12s-5.373 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm287 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-73c-6.627 0-12-5.373-12-12s5.373-12 12-12h73zm264 12c0-6.627-5.373-12-12-12H426c-6.627 0-12 5.373-12 12s5.373 12 12 12h166c6.627 0 12-5.373 12-12zm-190-84c6.627 0 12 5.373 12 12s-5.373 12-12 12h-9c-6.627 0-12 5.373-12 12s5.373 12 12 12h257c6.627 0 12-5.373 12-12s-5.373-12-12-12H462v-.01c-6.395-.262-11.5-5.53-11.5-11.99s5.105-11.728 11.5-11.99V318h24c6.627 0 12-5.373 12-12s-5.373-12-12-12H330c-6.627 0-12 5.373-12 12s5.373 12 12 12h84zm298-12c0-6.627-5.373-12-12-12H544c-6.627 0-12 5.373-12 12s5.373 12 12 12h156c6.627 0 12-5.373 12-12z"
          fill="#F0D29F"
        />
      </G>
      <Mask id="prefix__b" x={0} y={0} width={582} height={582}>
        <Circle cx={291} cy={291} r={291} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__b)">
        <Path
          d="M159 402c0-6.627-5.373-12-12-12h-29c-6.627 0-12-5.373-12-12s5.373-12 12-12h101c6.627 0 12 5.373 12 12s-5.373 12-12 12h-3l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12z"
          fill="#D86534"
        />
      </G>
      <Mask id="prefix__c" x={0} y={0} width={582} height={582}>
        <Circle cx={291} cy={291} r={291} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__c)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M466 54c-6.627 0-12 5.373-12 12s5.373 12 12 12h156c6.627 0 12-5.373 12-12s-5.373-12-12-12H466zm-220 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h78v.01c6.395.262 11.5 5.53 11.5 11.99s-5.105 11.728-11.5 11.99v.01H164c-6.627 0-12 5.373-12 12s5.373 12 12 12h257c6.627 0 12-5.373 12-12s-5.373-12-12-12h-49c-6.627 0-12-5.373-12-12s5.373-12 12-12h30c6.627 0 12-5.373 12-12s-5.373-12-12-12H246zm205 96c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zm-287 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zm-264 12c0-6.627 5.373-12 12-12H78c6.627 0 12 5.373 12 12s-5.373 12-12 12H-88c-6.627 0-12-5.373-12-12zM90 78c-6.627 0-12 5.373-12 12s5.373 12 12 12h9c6.627 0 12 5.373 12 12s-5.373 12-12 12h-257c-6.627 0-12-5.373-12-12s5.373-12 12-12H42v-.01c6.395-.262 11.5-5.53 11.5-11.99S48.395 78.272 42 78.01V78H18c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12H90zm-298-12c0-6.627 5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-156c-6.627 0-12-5.373-12-12z"
          fill="#DC8E61"
        />
      </G>
      <Mask id="prefix__d" x={0} y={0} width={582} height={582}>
        <Circle cx={291} cy={291} r={291} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__d)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M624 438c-6.627 0-12 5.373-12 12s5.373 12 12 12h156c6.627 0 12-5.373 12-12s-5.373-12-12-12H624zm-220 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h78v.01c6.395.262 11.5 5.53 11.5 11.99s-5.105 11.728-11.5 11.99v.01H322c-6.627 0-12 5.373-12 12s5.373 12 12 12h257c6.627 0 12-5.373 12-12s-5.373-12-12-12h-49c-6.627 0-12-5.373-12-12s5.373-12 12-12h30c6.627 0 12-5.373 12-12s-5.373-12-12-12H404zm205 96c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zm-287 0c-6.627 0-12 5.373-12 12s5.373 12 12 12h73c6.627 0 12-5.373 12-12s-5.373-12-12-12h-73zM58 546c0-6.627 5.373-12 12-12h166c6.627 0 12 5.373 12 12s-5.373 12-12 12H70c-6.627 0-12-5.373-12-12zm190-84c-6.627 0-12 5.373-12 12s5.373 12 12 12h9c6.627 0 12 5.373 12 12s-5.373 12-12 12H0c-6.627 0-12-5.373-12-12s5.373-12 12-12h200v-.01c6.395-.262 11.5-5.53 11.5-11.99s-5.105-11.728-11.5-11.99V462h-24c-6.627 0-12-5.373-12-12s5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12h-84zm-298-12c0-6.627 5.373-12 12-12h156c6.627 0 12 5.373 12 12s-5.373 12-12 12H-38c-6.627 0-12-5.373-12-12z"
          fill="#D89D6D"
        />
      </G>
      <Mask id="prefix__e" x={0} y={0} width={582} height={582}>
        <Circle cx={291} cy={291} r={291} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__e)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M177 222c6.627 0 12 5.373 12 12s-5.373 12-12 12h-10c-6.627 0-12 5.373-12 12s5.373 12 12 12h89c6.627 0 12-5.373 12-12s-5.373-12-12-12h-10l-.001-.01c-6.395-.263-11.499-5.53-11.499-11.99s5.104-11.727 11.499-11.99L246 222h65c6.627 0 12-5.373 12-12s-5.373-12-12-12H112c-6.627 0-12 5.373-12 12s5.373 12 12 12h65zm-46 36c0-6.627-5.373-12-12-12H57c-6.627 0-12 5.373-12 12s5.373 12 12 12h62c6.627 0 12-5.373 12-12zM9 246c6.627 0 12 5.373 12 12s-5.373 12-12 12h-28c-6.627 0-12-5.373-12-12s5.373-12 12-12H9zm475 12c0-6.627-5.373-12-12-12H304c-6.627 0-12 5.373-12 12s5.373 12 12 12h168c6.627 0 12-5.373 12-12zm64-12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-28c-6.627 0-12-5.373-12-12s5.373-12 12-12h28zm-35-36c0-6.627-5.373-12-12-12H359c-6.627 0-12 5.373-12 12s5.373 12 12 12h142c6.627 0 12-5.373 12-12zm86-12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-50c-6.627 0-12-5.373-12-12s5.373-12 12-12h50zM52 210c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12s5.373 12 12 12h28c6.627 0 12-5.373 12-12z"
          fill="#D89D6D"
        />
      </G>
      <Mask id="prefix__f" x={0} y={0} width={582} height={582}>
        <Circle cx={291} cy={291} r={291} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__f)">
        <Path opacity={0.078} fill="#000" d="M291 0h292v582H291z" />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M291 577c157.953 0 286-128.047 286-286S448.953 5 291 5v572z"
        fill="#A15C3E"
      />
      <Mask id="prefix__g" x={291} y={5} width={286} height={572}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M291 577c157.953 0 286-128.047 286-286S448.953 5 291 5v572z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__g)">
        <Circle cx={291.5} cy={291.5} r={269.5} fill="#F0D29F" />
        <Circle cx={292.5} cy={291.5} r={212.5} fill="#E2BE81" />
        <Circle cx={292.5} cy={291.5} r={187.5} fill="#D27140" />
        <Circle cx={291} cy={291} r={42} fill="#565658" />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M118 366c-6.627 0-12 5.373-12 12s5.373 12 12 12h101c6.627 0 12-5.373 12-12s-5.373-12-12-12H118zm25 48c-6.627 0-12 5.373-12 12s5.373 12 12 12h76c6.627 0 12-5.373 12-12s-5.373-12-12-12h-76z"
        fill="#D86534"
      />
    </Svg>
  );
}

export default SvgComponent;
