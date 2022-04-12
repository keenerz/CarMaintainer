const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      carinfo: {},
      carmaintenance: []
    },
    actions: {
      loadInformationvin: async (vin, mileage) => {
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
          f`http://api.carmd.com/v3.0/maint?vin=${vin}&mileage=${mileage}`,
          options
        );
        if (response.status === 200) {
          const payload = await response.json();
          setStore({ carmaintenance: payload.data });
        }
      },
    },
  };
};

export default getState;
