type InputProps = {
  value: string;
};

export const Input = (props: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return <input type="text" value={props.value} onChange={handleChange} />;
};
