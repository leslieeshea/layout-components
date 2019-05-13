import React from 'react';

export default function Color() {
  const color = {
    name: 'Pearl Violet',
    hex: '#8673A1',
    rgb: {
      red: 134,
      green: 115,
      blue: 161
    }
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{color.name}</dd>

      <dt>Hex</dt>
      <dd>{color.hex}</dd>

      <dt>RGB</dt>
      <dd>Red - {color.rgb.red}</dd>
      <dd>Green - {color.rgb.green}</dd>
      <dd>Blue - {color.rgb.blue}</dd>
    </dl>
  );
}
