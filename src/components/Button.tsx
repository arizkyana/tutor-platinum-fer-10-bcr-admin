function Button(props) {
  const { variant } = props;
  if (variant === 'Primary')
    return (
      <button type="button" style={{ background: 'black' }}>
        submit
      </button>
    );
  if (variant === 'Disabled')
    return (
      <button type="button" style={{ background: 'gray' }}>
        submit
      </button>
    );
  return (
    <button type="button" style={{ background: 'white' }}>
      submit
    </button>
  );
}

export default Button;
