import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const getState = ({ getStore, getActions, setStore }) => {
  const notyf = new Notyf();
  return {
    store: {
      modoClaro: "",
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
      tarjetaCoord: {},
      tarjetaCoordComp: {},
      transacciones: [],
      listaNotificaciones: [],
      configuracion: [],
      graficaHome: [
        { time: "2023-01-01", value: 0 },
        { time: "2023-01-02", value: 0 },
        { time: "2023-01-03", value: 0 },
        { time: "2023-01-04", value: 0 },
        { time: "2023-01-05", value: 0 },
        { time: "2023-01-06", value: 0 },
        { time: "2023-01-07", value: 0 },
        { time: "2023-01-08", value: 0 },
        { time: "2023-01-09", value: 0 },
        { time: "2023-01-10", value: 0 }
      ],
      simbolos: [],
      grafica: [],
      chartData: [], // Graficas
      stockData: null, // Datos de mercado
      notificacionesHidden: false,
      producto: [],
      cart: JSON.parse(localStorage.getItem("cart") || "[]")
    },
    actions: {
      ObtenerSimbolos: async () => {

        try {
          const response = await fetch(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${process.env.FINNHUB_API_KEY}`);
          if (!response.ok) throw new Error('Error fetching data');

          const data = await response.json();

          const resultado = await data.map((item) => {
            return {
              moneda: item.currency,
              simbolo: item.symbol,   // Agregamos el símbolo
              nombre: item.description  // Agregamos la descripción
            };
          });

          setStore({ ...getStore(), simbolos: resultado });
        } catch (error) {
          console.error('Error al obtener datos del backend:', error);
        }
      },
      ActualizarGrafica: (datos) => {
        setStore({ ...getStore(), grafica: datos });
      },
      ActualizarGraficaHome: (datos) => {
        setStore({ ...getStore(), graficaHome: datos });
      },

      CambiarIncognito: async (estado) => {
        // Actualizar la UI localmente
        if (estado === true) {
          notyf.open({ type: 'custom', message: "Modo incógnito activado", className: 'notyf-custom' });
        } else {
          notyf.open({ type: 'custom', message: "Modo incógnito desactivado", className: 'notyf-custom' });
        }
        setStore({ ...getStore(), hidden: estado });

        // Obtener el user_id desde el store
        const user_id = localStorage.getItem('userId');

        // Enviar la actualización al backend
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/update_config", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id, ocultar_saldo: estado })
          });
          if (!response.ok) throw new Error("Error al actualizar el modo incógnito");
          const data = await response.json();
          notyf.success(data.message);
        } catch (error) {
          notyf.error("Error al actualizar el modo incógnito");
          console.error(error);
        }
      },

      CambiarNotificaciones: () => {
        !getStore().notificacionesHidden == true
          ? notyf.open({ type: 'custom', message: "Notificaciones desactivadas", className: 'notyf-custom' })
          : notyf.open({ type: 'custom', message: "Notificaciones Activadas", className: 'notyf-custom' });
        setStore({ ...getStore(), notificacionesHidden: !getStore().notificacionesHidden });
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
      CambiarModo: async (estado) => {
        console.log("desde el flux el estado ASDASDAWDDAWD", estado)
        // Actualizar la UI localmente
        if (estado === true) {
          notyf.open({ type: 'custom', message: "Modo claro activado", className: 'notyf-custom' });
          setStore({
            modoClaro: estado,
            texto: "text-dark",
            fondo: "fondo-modo-claro",
            borde: "border border-secondary",
            borde_hover: "enlace-oscuro",
          });
          document.body.classList.remove("fondo-modo-oscuro");
          document.body.classList.add("fondo-modo-claro");
        } else {
          notyf.open({ type: 'custom', message: "Modo oscuro activado", className: 'notyf-custom' });
          setStore({
            modoClaro: estado,
            texto: "text-white",
            fondo: "fondo-modo-oscuro",
            borde: "border border-white",
            borde_hover: "enlace-claro",
          });
          document.body.classList.remove("fondo-modo-claro");
          document.body.classList.add("fondo-modo-oscuro");
        }

        // Obtener el user_id
        const user_id = localStorage.getItem('userId');

        // Enviar la actualización al backend
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/update_config", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id, modo_oscuro: estado })
          });
          if (!response.ok) throw new Error("Error al actualizar el modo");
          const data = await response.json();
          // Puedes mostrar un mensaje de éxito adicional si lo deseas
          notyf.success(data.message);
        } catch (error) {
          notyf.error("Error al actualizar el modo");
          console.error(error);
        }
      },


      updateUserLanguage: async (user_id, idioma) => {
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/update_config", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id, idioma })
          });
          console.log(user_id, idioma);

          if (!response.ok) throw new Error("Error al actualizar el idioma");
          const data = await response.json();
          notyf.success(data.message);
        } catch (error) {
          notyf.error("Error al actualizar el idioma");
          console.error(error);
        }
      },

      getUserConfig: async (id) => {
        try {
            // Realizamos la petición GET al endpoint, enviando el user_id como query string
            const response = await fetch(`${process.env.BACKEND_URL}/api/get_config/${id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
    
            if (!response.ok) {
                throw new Error(`Error al obtener la configuración: ${response.status} ${response.statusText}`);
            }
    
            // Convertimos la respuesta a JSON
            const configData = await response.json();
    
            // Guardamos la configuración en el localStorage (opcional)
            localStorage.setItem('userConfig', JSON.stringify(configData));
    
            // Actualizamos el store y la UI en base al valor de modo (suponiendo que configData.modo_oscuro
            // es un booleano que coincide con la lógica de CambiarModo)
            if (configData.modo_oscuro === true) {
                // Modo Claro activado
                setStore({
                    ...getStore(),
                    configuracion: configData,
                    hidden: configData.ocultar_saldo,
                    modoClaro: configData.modo_oscuro,
                    texto: "text-dark",
                    fondo: "fondo-modo-claro",
                    borde: "border border-secondary",
                    borde_hover: "enlace-oscuro"
                });
                // Actualizamos la clase del body para reflejar el modo
                document.body.classList.remove("fondo-modo-oscuro");
                document.body.classList.add("fondo-modo-claro");
            } else {
                // Modo Oscuro activado
                setStore({
                    ...getStore(),
                    configuracion: configData,
                    hidden: configData.ocultar_saldo,
                    modoClaro: configData.modo_oscuro,
                    texto: "text-white",
                    fondo: "fondo-modo-oscuro",
                    borde: "border border-white",
                    borde_hover: "enlace-claro"
                });
                document.body.classList.remove("fondo-modo-claro");
                document.body.classList.add("fondo-modo-oscuro");
            }
  
        } catch (error) {
            console.error("Error al obtener la configuración del usuario:", error);
            notyf.error("Error al obtener la configuración");
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
              notyf.error("Error al actualizar datos del usuario:");
              throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            return response.json(); // Convertimos la respuesta a JSON
          })

          .then((data) => {

            // Guardamos los datos del usuario en el store bajo la propiedad "usuario"
            setStore({ ...store, cliente: data.cliente });
            setStore({ ...store, cuentas: data.cuentas });
            setStore({ ...store, user: data.user });
            setStore({ ...store, listaNotificaciones: data.notificaciones });
            setStore({ ...store, tarjetaCoord: data.tarjeta_coordenadas });
            setStore({ ...store, transacciones: data.cuentas.transacciones });
            setStore({ ...store, configuracion: data.configuracion });

            // console.log("TRANSACCCCCCCCCCCCCCCCCCCCIONES", data.cuentas.transacciones)


            let valores = [];
            Object.entries(data.cuentas.transacciones).map((item) => {
              // console.log(item[0])
              let datos = { "time": Math.floor(new Date(item[1].fecha).getTime() / 1000) - item[0], "value": parseInt(item[1].monto) }
              valores.push(datos)
            })
            console.log(valores)

            valores.sort((a, b) => a.time - b.time);
            getActions().ActualizarGraficaHome(valores);


            data.values == undefined ? "" : actions.ActualizarGrafica(valores)


            console.log("user", store.user, "cliente", store.cliente, "cuentas", store.cuentas, "Notificaciones", store.listaNotificaciones, "transacciones", store.transacciones,
              "configuracion", store.configuracion
            );
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
              notyf.success("Perfil Actualizado")
              const data = await response.json(); // Procesar la respuesta como JSON
              setStore({ ...store, cliente: data.cliente });
            } else {
              notyf.error("Error al actualizar el usuario")
              const errorData = await response.json(); // Procesar el error como JSON
            }
          })
          .catch((error) => {
            console.error("Error de red o del servidor:", error);
          });
      },

      sendCoordinatesCard: (userId) => {
        const store = getStore();

        fetch(`${process.env.BACKEND_URL}/api/send-coordinates-card/${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al enviar la tarjeta de coordenadas");
            }
            return response.json();
          })
          .then((data) => {
            // Si la solicitud es exitosa, actualiza el store
            setStore({
              ...store, coordinatesCardSent: true,
            });
            console.log("Tarjeta de coordenadas enviada exitosamente:", data);
          })
          .catch((error) => {
            // Si hay un error, actualiza el store con el mensaje de error
            setStore({
              ...store, coordinatesCardSent: false,
            });
            console.error("Error al enviar la tarjeta de coordenadas:", error);
          });
      },

      realizarTransferencia: async (cuenta_origen_id, numero_cuenta_destino, nombre_destino, apellidos_destino, monto, descripcion) => {

        try {
          const response = await fetch(`${process.env.BACKEND_URL}/api/transaccion/transferencia`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${localStorage.getItem("token")}`, // Si usas autenticación
            },
            body: JSON.stringify({
              cuenta_origen_id,
              numero_cuenta_destino, // Número de cuenta destino
              nombre_destino,       // Nombre del cliente destino
              apellidos_destino,    // Apellidos del cliente destino
              monto,
              descripcion,
            }),
          });

          const data = await response.json();
          console.log(data)
          if (!response.ok) {
            throw new Error(data.error || "Error al realizar la transferencia");
          }

          // Actualizar el store con los nuevos saldos
          // const store = getStore();
          // const updatedCuentas = store.cuentas.map((cuenta) => {
          //     if (cuenta.id === cuenta_origen_id) {
          //         return { ...cuenta, saldo: data.saldo_origen };
          //     }
          //     if (cuenta.numero_cuenta === numero_cuenta_destino) {
          //         return { ...cuenta, saldo: data.saldo_destino };
          //     }
          //     return cuenta;
          // });

          // setStore({
          //     ...store,
          //     cuentas: updatedCuentas,
          // });

          return data; // Devuelve los datos de la transferencia
        } catch (error) {
          console.error("Error al realizar la transferencia:", error);
          throw error; // Lanza el error para manejarlo en el componente
        }
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
      setNotificaciones: (listaNotificaciones) => {
        const store = getStore();
        setStore({ ...store, listaNotificaciones });
      },

      sendCode: (email) => {
        try {
          const store = getStore();
          const actions = getActions();
          setStore({ email });

          fetch(process.env.BACKEND_URL + "/api/send-code", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify({ email: store.email }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
        } catch (error) {
          return notyf.error("Error al enviar el codigo")
        }
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
          .then((response) => {
            if (!response.ok) { notyf.error("Código Incorrecto"); }
            return response.json();
          })
          .then((data) => {
            notyf.success("Codigo Verificado");
            // Guardamos el user_id en el store
            setStore({ user: data.user_id });
            console.log(store.user)
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },

      updateUserPassword: (id, newPassword) => {
        fetch(`${process.env.BACKEND_URL}/api/User/${id}/Password`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ new_password: newPassword })
        })
          .then(async (response) => {
            if (response.ok) {
              const data = await response.json();
              notyf.success("Contraseña actualizada correctamente");
            } else {
              const errorData = await response.json();
              // Mostrar mensaje de error del servidor o un mensaje genérico
              notyf.error(errorData.error || "Error al actualizar la contraseña");
            }
          })
          .catch((error) => {
            notyf.error("Error de red o del servidor");
            console.error("Error en updateUserPassword:", error);
          });
      },

      // updateUserPassword: async (userId, newPassword) => {
      //   try {
      //     const response = await fetch(process.env.BACKEND_URL + `/api/User/${userId}/Password`, {
      //       method: "PUT",
      //       headers: {
      //         "Content-Type": "application/json"
      //       },
      //       body: JSON.stringify({ newPassword })
      //     });
      //     return response; // Luego, en el componente, puedes revisar response.ok para mostrar mensajes
      //   } catch (error) {
      //     console.error("Error al actualizar la contraseña:", error);
      //     throw error;
      //   }
      // },


      sendCoordinatesCode: (email) => {
        console.log(email)
        const store = getStore();

        fetch(`${process.env.BACKEND_URL}/api/send-coordinates-code`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al enviar el código");
            }
            return response.json();
          })
          .then((data) => {
            // setStore({
            //   ...store, coordinatesCodeSent: true,
            // });
            console.log("Código enviado:", data);
          })
          .catch((error) => {
            // setStore({
            //   ...store, coordinatesCodeSent: false,
            // });
            console.error("Error:", error);
          });
      },

      // Acción para verificar el código de la tarjeta de coordenadas

      verifyCoordinatesCode: (email, code) => {
        const store = getStore();

        return fetch(`${process.env.BACKEND_URL}/api/verify-coordinates-code`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, code: code }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Código inválido o expirado");
            }
            return response.json();
          })
          .then((data) => {
            setStore({ ...store, tarjetaCoord: data.tarjeta_coordenadas });
            return data; // 🔹 Devolvemos los datos
          })
          .catch((error) => {
            console.error("Error:", error);
            return null; // 🔹 Devolvemos null en caso de error
          });
      },

      sendCoordinatesCard: async (user_id) => {
        try {
          const response = await fetch(`${process.env.BACKEND_URL}/api/send-coordinates-card/${user_id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            }
          });

          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.error || "Error al enviar la tarjeta de coordenadas");
          }

          return data;
        } catch (error) {
          console.error("Error enviando la tarjeta de coordenadas:", error);
          return null;
        }
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
          const response = await fetch(`${process.env.s}/api/stock/${symbol}`);
          if (!response) throw new Error('Error fetching stock data');
          const data = await response.json();

          // Guardar datos en el store
          setStore({ stockData: data });
        } catch (error) {
          console.error('Error al obtener datos de las acciones:', error);
        }
      },

      loadProducts: async () => {
        try {
          // Realizamos la petición GET al endpoint de carga de productos
          const response = await fetch(process.env.BACKEND_URL + '/api/products/load', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          });
      
          // Si la respuesta no es exitosa, lanzamos un error
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Error al cargar productos");
          }
      
          const data = await response.json();
      
          // Por ejemplo, puedes mostrar una notificación de éxito
          notyf.success(data.msg);
      
          // Opcional: si el endpoint devolviera productos, podrías actualizar el store
          // setStore({ ...getStore(), products: data.products });
      
        } catch (error) {
          notyf.error("Error al cargar productos");
          console.error("Error en loadProducts:", error);
        }
      },      

      fetchProducts: () => {
        const store = getStore();
        fetch(process.env.BACKEND_URL + '/api/products', {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            return response.json(); // Convertimos la respuesta a JSON
          })
          .then((data) => {
            const productos = data.productos;
            const productosPorCategoria = productos.reduce((acc, producto) => {
              const categoria = producto.categoria || 'Sin Categoria';
              if (!acc[categoria]) {
                acc[categoria] = [];
              }
              acc[categoria].push(producto);
              return acc;
            }, {});
            // Actualizamos el store con los productos agrupados
            setStore({ ...store, productos: productosPorCategoria });
            console.log("Productos agrupados:", productosPorCategoria);
          })
          .catch((error) => {
            console.error("Error al obtener productos:", error);
          });
      },

      addToCart: (product) => {
        const store = getStore();
        const existe = store.cart.find((item) => item.id === product.id);
        if (!existe) {
          const updatedCart = [...store.cart, product];
          setStore({ ...store, cart: updatedCart });
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          notyf.success("Producto agregado al carrito");
        } else {
          notyf.open({ type: "warning", message: "Producto ya se encuentra en el carrito" });
        }
      },

      // Acción para eliminar un producto específico del carrito y actualizar localStorage
      removeFromCart: (productId) => {
        const store = getStore();
        const updatedCart = store.cart.filter((item) => item.id !== productId);
        setStore({ ...store, cart: updatedCart });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        notyf.success("Producto eliminado del carrito");
      },

      // Acción para vaciar completamente el carrito y actualizar localStorage
      clearCart: () => {
        const store = getStore();
        setStore({ ...store, cart: [] });
        localStorage.setItem("cart", JSON.stringify([]));
        notyf.success("Carrito vaciado");
      },

    },
  };
};



export default getState;
