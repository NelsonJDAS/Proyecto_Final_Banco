const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      texto: "text-dark",
      fondo: "fondo-modo-oscuro",
      borde: "border border-danger",
      borde_hover: "enlace-oscuro",
      hidden: false,
      codeSent: false,
      email: "", // Email ingresado por el usuario,
      code: ""
    },
    actions: {
      CambiarIncognito: (estado) => {
        setStore({ ...getStore(), hidden: estado });
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

      ConseguirToken: () => {
        try {
        } catch (error) {
          console.log(error);
        }
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
              setStore({
                codeSent: true, // Indica que el código fue enviado
                timeLeft: 600, // 10 minutos en segundos
              });

              // Inicia el temporizador
              // actions.startTimer();
            } else {
              alert(data.error);
            }
          });
      },

      // startTimer: () => {
      //   const interval = setInterval(() => {
      //     const store = getStore();
      //     const newTimeLeft = store.timeLeft - 1;

      //     if (newTimeLeft <= 0) {
      //       clearInterval(interval); // Detiene el temporizador cuando llega a 0
      //       setStore({ codeSent: false, timeLeft: 0 }); // Resetea el estado
      //     } else {
      //       setStore({ timeLeft: newTimeLeft }); // Actualiza el tiempo restante
      //     }
      //   }, 1000); // Decrementa cada segundo
      // },

      verifyCode: (email, code) => {
        const store = getStore();
        setStore({ email });
        setStore({ code })

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

      
      // Funcion Ejemplo
      //   changeColor: (index, color) => {
      //     //get the store
      //     const store = getStore();
      //     //we have to loop the entire demo array to look for the respective index
      //     //and change its color
      //     const demo = store.demo.map((elm, i) => {
      //       if (i === index) elm.background = color;
      //       return elm;
      //     });
      //     //reset the global store
      //     setStore({ demo: demo });
      //   },
    },
  };
};

export default getState;
