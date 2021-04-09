export const defaultPlayer = {
  loading: false,
  active: false,
  id: null,
  errorMessage: null,
  searchButtonText: "Search",
};

export const playerReducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...defaultPlayer,
        errorMessage: action.errorMessage,
      };

    case "LOADING":
      return {
        ...defaultPlayer,
        loading: action.loading,
        errorMessage: null,
        searchButtonText: action.loading ? "Searching..." : "Search",
      };

    default:
      return state;
  }
};
