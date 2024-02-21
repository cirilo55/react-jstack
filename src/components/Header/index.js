import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Button from "../Button";
import styles from "./Header.scss";

import Title from "../Title";

import { ThemeContext } from "../../context/ThemeContext";



function Header(props) {
    const { onToggleTheme } = useContext(ThemeContext);
    return (
        <>
            <Title>{props.title}</Title>
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