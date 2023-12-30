import React from 'react';

interface TextProps {
  text: string;
  css?: any;
}

export const LineBreak = ({ text, ...props }: TextProps) => {
  return (
    <p {...props}>
      {text.split('\n').map((txt, index) => (
        <React.Fragment key={index}>
          {txt}
          {index !== text.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  );
};
