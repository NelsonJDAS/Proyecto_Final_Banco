const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      texto: "text-dark",
      fondo: "fondo-modo-oscuro",
      borde: "border border-danger",
      borde_hover: "enlace-oscuro",
      hidden: false,
      codeSent: false,
      email: "",
      code: "",
      token: null,
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
            borde: "border border-dark",
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

          // Actualizamos el store con el token y los datos del usuario
          setStore({
            ...store,
            token: data.token,
            user: data["Usuario Identificado"], // Ajustar según lo que devuelva tu backend
          });

          console.log("Login exitoso. Token guardado en localStorage.");
        } catch (error) {
          console.error("Error en loginUser:", error.message);
          throw error; // Lanzamos el error para que HandleLogin lo maneje
          console.error("Error en loginUser:", error.message);
          throw error; // Lanzamos el error para que HandleLogin lo maneje
        }
      },

      registerUser: (name, email, password) => {
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
            const token = data.token; // Accedemos al token desde la respuesta
            localStorage.setItem("token", token); // Guardamos el token en localStorage
            return "success";
          })
          .catch((error) => {
            console.error("Error al registrar usuario:", error);
          });
      },
      
      getUserData: (userId) => {
        const store = getStore();
        const actions = getActions();

        fetch(process.env.BACKEND_URL + `/api/User/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${store.token}`, // Asegúrate de enviar el token si es necesario para la autenticación
          },
        })
          .then((response) => {
            if (!response.ok) {
              return response.json().then((errorData) => {
                throw new Error(errorData.mensaje || "Error al obtener los datos del usuario");
              });
            }
            return response.json();
          })
          .then((data) => {
            // Guardamos la información del usuario en el store
            setStore({
              ...store,
              userData: data,  // Aquí se actualiza el store con los datos del usuario
            });

            console.log("Datos del usuario obtenidos exitosamente.");
          })
          .catch((error) => {
            console.error("Error al obtener los datos del usuario:", error.message);
            // Aquí podrías manejar el error de otra forma si lo necesitas
          });
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
    },
  };
};

export default getState;
