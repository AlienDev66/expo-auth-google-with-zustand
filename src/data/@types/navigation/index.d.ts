declare module NAVIGATION {
  type PrivateScreens = "HOME";

  type PublicScreens = "SIGN_IN";

  type Private = {
    PRIVATE: { screen: PrivateScreens; params?: any };
  };

  type Public = {
    PUBLIC: { screen: PublicScreens };
  };
}
