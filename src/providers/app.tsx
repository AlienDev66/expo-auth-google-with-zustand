import { ReactNode } from "react";

type AppProviderProps = {
  children: ReactNode;
};

export const AppWrapper = ({ children }: AppProviderProps) => <>{children}</>;
