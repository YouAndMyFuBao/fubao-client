interface TextProps {
  text: string;
}

export const LineBreak = ({ text }: TextProps) => {
  return (
    <p>
      {text.split('\n').map((txt) => (
        <>
          {txt}
          <br />
        </>
      ))}
    </p>
  );
};
