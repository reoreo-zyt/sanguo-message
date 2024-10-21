import React from "react";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const CustomButton = styled(Button)({
  background: "rgb(7, 108, 224)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MButton({ title }: any) {
  return (
    <CustomButton
      className="nav-links-button"
      variant="contained"
      color="primary"
    >
      {title}
    </CustomButton>
  );
}

export default MButton;
