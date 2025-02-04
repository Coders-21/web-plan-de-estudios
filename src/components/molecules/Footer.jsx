import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
    font-weight: 600;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0px;
    position: absolute;
    width: 100%;
    font-size: var(--p1);
    i{ color: var(--red) }
    span{ margin-left: 3px }
`;

export default function Footer() {
  return (
    <Foot>
      <a href="https://www.gnuno.com.ar">
        <i>Desarrollado por <span className="primary">GNUno</span></i>
      </a>
    </Foot>
  );
}