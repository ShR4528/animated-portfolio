const Links = () => {
  const items = [
    'Homepage',
    'Homepage',
    'Homepage',
    'Homepage',
    'Homepage',
    'Homepage',
  ];

  return (
    <div className='links'>
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
