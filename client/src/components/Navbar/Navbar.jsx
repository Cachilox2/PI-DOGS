import styles from "./Navbar.module.css";
import logo from "../../assets/dog.png";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ onSearch, paginate }) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo_dog} src={logo} alt="dog logo" />
      <div className={styles.group}>
        <ul className="navigation">
          <li>Create dog</li>
        </ul>
        <SearchBar onSearch={onSearch} paginate={paginate} />
      </div>
    </header>
  );
};

export default Navbar;
