import NavItem from "./NavItem";

function NavItemsContainer(props) {
  const anchors = [
    { anchor: "intro", name:"Intro" },
    { anchor: "transformations", name:"Transformations" },
    { anchor: "achievements", name:"Achievements" },
    { anchor: "contact", name:"Contact" },
  ];

  return (
    <div className="flex align-items-center h-100p">
      <div className="logo-wrapper">
        <a className="logo" href="/">
          HamzaTej
        </a>
      </div>

      <div className="h-100p ml-auto p-2">
        <ul className="h-100p p-2 flex justify-content-right flex-wrap  menu-wrapper">
          {anchors.map((obj, i) => <NavItem key={i} data={obj}/>)}
        </ul>
      </div>
    </div>
  );
}

export default NavItemsContainer;
