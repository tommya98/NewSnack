import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  readonly label: string;
  readonly size: 'large' | 'medium';
  readonly onClick: () => void;
}

function Button({ label, size = 'medium', onClick }: Props) {
  return (
    <Btn size={size} onClick={onClick}>
      {label}
    </Btn>
  );
}

const getSizeStyles = (size: 'large' | 'medium') => {
  switch (size) {
    case 'medium':
      return css`
        font-size: 16px;
        width: 160px;
        padding: 12px;
      `;
    case 'large':
      return css`
        font-size: 16px;
        width: 400px;
        padding: 12px;
      `;
    default:
      return css`
        font-size: 16px;
        width: 160px;
        padding: 12px;
      `;
  }
};

const Btn = styled.button<{ size: 'large' | 'medium' }>`
  border: 0;
  border-radius: 8px;
  color: #ffffff;
  background: #3a5b22;
  cursor: pointer;
  ${props => getSizeStyles(props.size || 'medium')}
`;

export default Button;
