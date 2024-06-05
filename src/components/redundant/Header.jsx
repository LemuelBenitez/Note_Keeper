
const textStyle = {
  fontFamily: "Anton, sans-serif",
  fontWeight: "400",
  fontStyle: "normal"
}

export default function Header() {
  return (
      <nav className="navbar bg-warning ">
        <div className="container-fluid">
          <a className="navbar-brand text-light"  style={textStyle}>
            KEEPER
          </a>
        </div>
      </nav>    
  );
}
