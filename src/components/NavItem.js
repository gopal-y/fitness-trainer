function NavItem({ style, name, href }) {
  const defaultStyle = {
    listStyleType: "none",
    textDecoration: "none",
  };
  const _style = { ...defaultStyle, ...style };

  return (
    <li style={_style}>
      <a className="nav-link" href={href} style={style}>
        {name}
      </a>
    </li>
  );
}

export default NavItem;
