import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Landingpage } from "./pages/landingpage.js";
import { Login } from "./pages/login.js";
import { Home } from "./pages/home.js";
import { Politicas } from "./pages/politicas.js";
import { Terminos } from "./pages/terminos.js";
import { Aviso } from "./pages/aviso.js";
import { Tarifas } from "./pages/tarifas.js";
import { Educacion } from "./pages/educacion.js";
import { Consejos } from "./pages/consejos.js";
import { Metodos } from "./pages/metodos.js";
import { Transferencias } from "./pages/transferencias.js";
import { Movimientos } from "./pages/movimientos.js";
import { Perfil } from "./pages/perfil.js";
import { Inversiones } from "./pages/inversiones.js";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { Contacto } from "./pages/contacto.js";
import { Chat } from "./pages/chat.js";
import { Titulos } from "./pages/titulos.js";
import { Certificaciones } from "./pages/certificaciones.js";

import { Not_found } from "./pages/not_found.js";

import injectContext, { Context } from "./store/appContext";
import { GraficaIndividual } from "./pages/graficaindividual.js";
import { Store } from "./pages/store.js";
import { Individualstore } from "./pages/individualstore.js";
import { StorePedido } from "./pages/storePedido.js";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const { store, actions } = useContext(Context);

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    // app-container, content -> clases para que el footer siempre se encuentre debajo del todo
    <div className={`app-container ${store.fondo} ${store.texto}`}>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <div className="content">
            <Routes>
              <Route element={<Landingpage />} path="/" />
              <Route element={<Login />} path="/login" />
              <Route element={<Politicas />} path="/politicas" />
              <Route element={<Terminos />} path="/terminos" />
              <Route element={<Aviso />} path="/aviso" />
              <Route element={<Tarifas />} path="/tarifas" />
              <Route element={<Educacion />} path="/educacion" />
              <Route element={<Consejos />} path="/consejos" />
              <Route element={<Metodos />} path="/metodos" />
              <Route element={<Not_found />} path="*" />
              <Route element={<Contacto />} path="/contacto" />
              <Route element={<Chat />} path="/chat" />
              <Route element={<Titulos />} path="/titulos" />
              <Route element={<Certificaciones />} path="/certificaciones" />
              <Route element={<Individualstore />} path="/tienda/:categoria/:productId" />
              <Route element={<Store />} path="/tienda" />
              <Route element={<GraficaIndividual />} path="/grafica/:nombre/:simbolo" />
              <Route element={<Home />} path="/home" />
              <Route element={<Perfil />} path="/perfil" />
              <Route element={<Transferencias />} path="/transferencias" />
              <Route element={<Movimientos />} path="/movimientos" />
              <Route element={<Inversiones />} path="/inversiones" />
              {store.cart.length === 0 ? "" : <Route element={<StorePedido />} path="/tienda/checkout" />}
            </Routes>
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

// <Route element={<Metodos />} path="/metodos" />