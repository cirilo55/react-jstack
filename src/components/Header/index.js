import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Button from "../Button";
import styles from "./Header.scss";

import { ThemeContext } from "../../context/ThemeContext";

function Header(props) {
    const { onToggleTheme } = useContext(ThemeContext);
    //com duas chaves significa obj javascript
    return (
        <>
            <h1 className={styles.title}>{props.title}</h1>
                <Button onClick={onToggleTheme}>
                    Mudar tema
                </Button>
            <div>{props.children}</div>
        </>
    );
}
Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
};

Header.defaultProps = {
    title: `JStack's Blog`,
};

export default Header;