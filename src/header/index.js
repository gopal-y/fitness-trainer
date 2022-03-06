import NavBar from "../components/NavBar";

function Header() {
  const style = {
    'position': 'fixed',
    'zIndex': '999',
    'boxShadow': '0 0 7px #111',
    'backgroundColor': '#fa4c40',
    'color':'#efe'
  }
  return <NavBar style={style}/>
}

export default Header;
