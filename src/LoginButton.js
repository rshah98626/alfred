import React from "react";
import { Button } from "react-native";

const LoginButton = ({ onPressCallback }) => {
  return (
    <Button
      onPress={onPressCallback}
      title="Login Button"
      color="#FFF"
      accessibilityLabel="Login to the app"
    />
  )
};

export default LoginButton;