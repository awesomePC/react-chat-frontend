import React, { PureComponent } from "react";
import { ThemeContextProvider } from "src/contexts/ThemeContext";
import StorybookSharedWrapper from "src/wrappers/StorybookSharedWrapper";
import { TargemStatefulProvider } from "react-targem";

interface AppWrapperProps {
  children: React.ReactChild;
}

// translation.json file is autogenerated and ignored
// so we use require() to prevent tsc compile time errors before webpack is first run
// eslint-disable-next-line @typescript-eslint/no-var-requires
const translationsJson = require("src/i18n/translations.json");

class AppWrapper extends PureComponent<AppWrapperProps> {
  render(): React.ReactNode {
    return (
      <TargemStatefulProvider detectLocale translations={translationsJson}>
        <ThemeContextProvider>
          <StorybookSharedWrapper>{this.props.children}</StorybookSharedWrapper>
        </ThemeContextProvider>
      </TargemStatefulProvider>
    );
  }
}

export default AppWrapper;
