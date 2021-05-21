import React from 'react';
import useOutsideAlerter from "./../custom-hooks/useOutsideAlerter";

const OutsideClickAlert = (props) => {

  const handleOutsideClick = props?.handleOutsideClick
    ? props?.handleOutsideClick
    : () => {};
  const containerRef = React.createRef();
  useOutsideAlerter(containerRef, handleOutsideClick);
  return <div ref={containerRef}>{props.children}</div>;
};

export default OutsideClickAlert;
