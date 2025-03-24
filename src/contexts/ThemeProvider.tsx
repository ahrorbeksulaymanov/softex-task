import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3178C6",
          colorPrimaryHover: "#3178C6",
          borderRadius: 6,
        },
        components: {
            Input: {
                
            },
            Table: {
                rowSelectedBg: "#fff",
                headerBg: "#F9FAFB",
                rowSelectedHoverBg: "#F9FAFB",
                borderColor: "#EAECF0",
                padding: 16
            }
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
