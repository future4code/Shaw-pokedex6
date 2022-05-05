export const toBack = (navigate) => {
  navigate(-1);
};

export const toHome = (navigate) => {
  navigate('/');
};

export const toPokeDex = (navigate,page) => {
  navigate(`/${page}`);
};

export const toDetails = (navigate,pokemon) => {
  navigate(`/details/${pokemon}`);
};

export const toDetailsPokeDex = (navigate,page,pokemon) => {
  navigate(`/${page}/details/${pokemon}`);
};