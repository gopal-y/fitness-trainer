import NavItem from "./NavItem";

function NavItemsContainer(props) {
  const defaultStyle = {
    display: "flex",
    justifyContent: "right",
    marginLeft: "auto",
    flexWrap: "wrap",
    rowGap: "100px",
    columnGap: "15px",
  };
  const containerStyle = {
    display: "flex",
    padding: "0 5px",
    alignItems: "center",
    height: `${props.height ?? 50}px`,
  };
  const navLinkStyle = {
    display: "block",
    textDecoration: "none",
    color: props.navItem?.color ?? "#cab",
    height: "100%",
  };
  const navLinkHoverStyle = {
    background: "#efaace",
  };
  const style = { ...defaultStyle, ...props.style };

  return (
    <div style={containerStyle}>
      <a style={navLinkStyle} href="/">
        HamzaTej
      </a>

      <ul style={style}>
        <NavItem style={navLinkStyle} href="#intro" name="Intro"/>
        <NavItem style={navLinkStyle} href="#transformations" name="Transformations"/>
        <NavItem style={navLinkStyle} href="#achievements" name="Achievements"/>
        <NavItem style={navLinkStyle} href="#contact" name="Contact"/>
      </ul>
    </div>
  );
}

export default NavItemsContainer;
