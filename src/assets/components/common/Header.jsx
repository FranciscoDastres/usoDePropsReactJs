import "../../css/header.css"

const Header = ({ titulo }) => {
  return (
    <header className="header-container">
      <h1>{titulo}</h1>
    </header>
  )
}

export default Header