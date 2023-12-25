interface ItemProps {
  text: string;
}

export const LineBreak = ({ text }: ItemProps) => {
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
