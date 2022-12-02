const NavBar = (props) => {
  return (
    <nav>
      <h1>color flipper</h1>
      <div className="nav-btns-container">
        <p onClick={props.handleClick}>simple</p>
        <p onClick={props.handleClick}>Hex</p>
      </div>
    </nav>
  );
};

export default NavBar;
