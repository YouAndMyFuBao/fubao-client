import React from 'react';

interface TextProps {
  text: string;
}

export const LineBreak = ({ text }: TextProps) => {
  return (
    <p>
      {text.split('\n').map((txt, index) => (
        <React.Fragment key={index}>
          {txt}
          {index !== text.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  );
};
