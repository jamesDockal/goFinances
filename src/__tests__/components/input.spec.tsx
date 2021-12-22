import React from "react";
import { render } from "@testing-library/react-native";

import Input from "../../components/Form/Input";
import { ThemeProvider } from "styled-components/native";
import theme from "../../Global/styles/theme";

const Provider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Input Component", () => {
  it("Should have specific border color when active", () => {
    const { getByTestId } = render(
      <Input
        testID="input-email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
        active={true}
      />,
      {
        wrapper: Provider,
      }
    );

    const input = getByTestId("input-email");

    expect(input.props.style[0].borderColor).toEqual(theme.colors.attention);
    expect(input.props.style[0].borderWidth).toEqual(3);
  });
});
