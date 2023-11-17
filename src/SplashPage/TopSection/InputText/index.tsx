import styled from '@emotion/styled';

interface Props {
  readonly label: string;
  readonly value: string;
  readonly onChange: (text: string) => void;
}

function InputText({ label, value, onChange }: Props) {
  return (
    <Input
      type="text"
      value={value}
      placeholder={label}
      onChange={event => {
        onChange(event.target.value);
      }}
    />
  );
}

const Input = styled.input`
  width: 360px;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #ffffff;
`;

export default InputText;
