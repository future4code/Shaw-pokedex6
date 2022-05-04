export const toBack = (navigate) => {
  navigate(-1);
};

export const toHome = (navigate) => {
  navigate('/');
};

export const toPokeDex = (navigate) => {
  navigate('/pokedex');
};

export const toDetails = (navigate,pokemon) => {
  navigate(`/details/${pokemon}`);
};