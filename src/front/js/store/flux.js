const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      carinfo: {},
    },
    actions: {
      loadInformation: async () => {
        const store = getStore();
        const actions = getActions();
        const session = actions.getCurrentSession();
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(
          process.env.BACKEND_URL + `/api/tracked`,
          options
        );
        if (response.status === 200) {
          const payload = await response.json();
          setStore({ tracked: payload });
        }
      },
    },
  };
};

export default getState;
