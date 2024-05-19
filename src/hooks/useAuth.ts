export const useAuth = () => {
  const signIn = () => {
    localStorage.setItem("isAuthenticated", "true");
  };

  const signOut = () => {
    localStorage.removeItem("isAuthenticated");
  };

  const isLogged = () => localStorage.getItem("isAuthenticated") === "true";

  return { signIn, signOut, isLogged };
};

export type AuthContext = ReturnType<typeof useAuth>; //we define a type to be used as a authContext to be used in the __root file, here we set it to be the return type of the useAuth function

//this is the useAuth function that returns the signIn,signOut and isLogged
