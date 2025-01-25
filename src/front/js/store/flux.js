const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      texto: "text-white",
      fondo: "fondo-modo-oscuro",
      borde: "border border-white",
      borde_hover: "enlace-claro",
      hidden: false,
      codeSent: false,
      email: "",
      code: "",
      token: null,
      user: "",
      cliente: "",
      cuentas: "",
      notificaciones: [],
      chartData: [], // Graficas
      stockData: null, // Datos de mercado
    },
    actions: {
      CambiarIncognito: (estado) => {
        setStore({ ...getStore(), hidden: estado });
      },
      Scroll: () => {
        const navbar = document.getElementById("navbar"); // Seleccionamos el elemento por ID
        if (navbar) {
          navbar.scrollIntoView({
            behavior: "smooth", // Desplazamiento suave
            block: "start", // Alinear al inicio del elemento
          });
        }
      },
      CambiarModo: (estado) => {
        if (estado === true) {
          setStore({
            texto: "text-dark",
            fondo: "fondo-modo-claro",
            borde: "border border-secondary",
            borde_hover: "enlace-oscuro",
          });
          document.body.classList.remove("fondo-modo-oscuro");
          document.body.classList.add("fondo-modo-claro");
        } else {
          setStore({
            texto: "text-white",
            fondo: "fondo-modo-oscuro",
            borde: "border border-white",
            borde_hover: "enlace-claro",
          });
          document.body.classList.remove("fondo-modo-claro");
          document.body.classList.add("fondo-modo-oscuro");
        }
      },

      loginUser: async (name, email, password) => {
        const store = getStore();
        const actions = getActions();


        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/User/Login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.mensaje || "Error en el inicio de sesión");
          }

          const data = await response.json();
          // Guardamos el token en el localStorage
          localStorage.setItem("token", data.token);
          localStorage.setItem("name", data.user.name);
          localStorage.setItem("userId", data.user.id);
          // actions.fetchUserDetails(data.user.id)

          // Actualizamos el store con el token y los datos del usuario
          setStore({
            ...store,
            token: data.token,
            user: data.user, // Ajustar según lo que devuelva tu backend

          });
          console.log("Login exitoso. Token guardado en localStorage.", store.user, store.usuario);
        } catch (error) {
          console.error("Error en loginUser:", error.message);
          throw error; // Lanzamos el error para que HandleLogin lo maneje
        }
      },

      registerUser: (name, email, password) => {
        const actions = getActions();
        console.log("desde flux", name, email, password);

        return fetch(process.env.BACKEND_URL + "/api/User/Register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            name: name,
            is_active: true,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error en el registro");
            }
            return response.json(); // Parseamos la respuesta JSON
          })
          .then((data) => {
            localStorage.setItem("token", data.token);
            localStorage.setItem("name", data.user.name);
            localStorage.setItem("userId", data.user.id);
            // actions.fetchUserDetails(data.user.id)
            return "success";
          })
          .catch((error) => {
            console.error("Error al registrar usuario:", error);
          });
      },

      fetchUserDetails: (id) => {
        const store = getStore();
        fetch(`${process.env.BACKEND_URL}/api/User/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {

            if (!response.ok) {
              throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            return response.json(); // Convertimos la respuesta a JSON
          })

          .then((data) => {

            // Guardamos los datos del usuario en el store bajo la propiedad "usuario"
            setStore({ ...store, cliente: data.cliente });
            setStore({ ...store, cuentas: data.cuentas });
            setStore({ ...store, user: data.user });
            setStore({ ...store, notificaciones: data.notificaciones});
            console.log("Datos del usuario guardados en el store:", "user", store.user, "cliente", store.cliente, "cuentas", store.cuentas, "notificaciones", store.notificaciones);

          })
          .catch((error) => {
            // Manejamos cualquier error que ocurra durante el fetch
            console.error("Hubo un problema al obtener los detalles del usuario:", error);
          });
      },

      updateClienteProfile: (id, perfil) => {
        const store = getStore();

        fetch(`${process.env.BACKEND_URL}/api/User/${id}/Perfil`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(perfil)
        })
          .then(async (response) => {
            if (response.ok) {
              const data = await response.json(); // Procesar la respuesta como JSON
              setStore({ ...store, usuario: data.cliente });
              console.log("Perfil actualizado:", data);
            } else {
              const errorData = await response.json(); // Procesar el error como JSON
              console.error("Error al actualizar el perfil:", errorData);
            }
          })
          .catch((error) => {
            console.error("Error de red o del servidor:", error);
          });
      },

      marcarNotificacionComoLeida: async (notificacionId) => {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/notificaciones/${notificacionId}/marcar-leida`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (!response.ok) {
                throw new Error("Error al marcar la notificación como leída");
            }
    
            const data = await response.json();
            return data; // Devuelve la notificación actualizada
            
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    },
    setNotificaciones:(notificaciones) => {
      const store = getStore();
      setStore({ ...store, notificaciones });
  },

      sendCode: (email) => {
        const store = getStore();
        const actions = getActions();
        setStore({ email }); // Almacena el email ingresado por el usuario

        fetch(process.env.BACKEND_URL + "/api/send-code", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: store.email }), // Usa el email recibido desde Login.jsx
        })
          .then((response) => response.json())
          .then((response) => console.log(response))
          .then((data) => {
            if (response.ok) {
              setStore(console.log(Enviado));
            } else {
              alert(data.error);
            }
          });
      },

      verifyCode: (email, code) => {
        const store = getStore();
        setStore({ email });
        setStore({ code });

        fetch(process.env.BACKEND_URL + "/api/verify-code", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: store.email, code: store.code }),
        })
          .then((response) => response.json())
          .then((response) => console.log(response))
          .then((data) => {
            if (response.ok) {
              alert("Código verificado. Ahora puedes cambiar tu contraseña.");
            } else {
              alert(data.error);
            }
          });
      },

      fetchGraficasData: async () => {
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/data");
          if (!response.ok) throw new Error('Error fetching data');

          const data = await response.json();

          // Formatear los datos
          const formattedData = data.map((item) => ({
            time: item.date,
            value: item.price,
          }));

          // Guardar los datos en el store
          setStore({ chartData: formattedData });
        } catch (error) {
          console.error('Error al obtener datos del backend:', error);
        }
      },

      fetchStockData: async (symbol) => {
        try {
          const response = await fetch(`${process.env.BACKEND_URL}/api/stock/${symbol}`);
          if (!response.ok) throw new Error('Error fetching stock data');
          const data = await response.json();

          // Guardar datos en el store
          setStore({ stockData: data });
        } catch (error) {
          console.error('Error al obtener datos de las acciones:', error);
        }
      },
    },
  };
};



export default getState;
