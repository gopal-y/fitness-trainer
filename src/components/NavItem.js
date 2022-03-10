function NavItem({ data }) {
  const { name, anchor } = data;

  function visit() {
    window.location.hash = anchor;
  }

  return (
    <button
      type="button"
      className="flex h-100p align-items-center nav-link"
      onClick={visit}
    >
      {name}
    </button>
  );
}

export default NavItem;
