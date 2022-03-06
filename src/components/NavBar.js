import NavItemsContainer from "./NavItemsContainer";
function NavBar(props) {
  const { style} = props;
  const defaultStyle = {
    backgroundColor: "rgba(255, 253, 253, 0.333)",
    width: "100%",
  };
  const finalStyle = { ...defaultStyle, ...style };

  return (
    <nav style={finalStyle}>
      <NavItemsContainer />
    </nav>
  );
}

export default NavBar;
