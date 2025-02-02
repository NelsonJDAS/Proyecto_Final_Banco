
import React, { useEffect, useContext, useRef } from 'react';
import { Context } from "../../store/appContext.js";
import { createChart } from 'lightweight-charts';

const GraficaHome = () => {
    const { store, actions } = useContext(Context); // Accede al contexto
    const chartContainerRef = useRef(null);

    console.log("grafica")
    console.log(store.graficaHome)

    useEffect(() => {
        // Llamar a la acción para obtener los datos
        actions.fetchGraficasData();
    }, []);

    useEffect(() => {
        if (store.graficaHome.length > 0) {
            // Crear el gráfico
            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: {
                        type: 'solid', // Tipo de fondo sólido
                        color: 'rgba(234, 234, 234, 0)' // Color de fondo blanco
                    },
                    textColor: 'white' // Color del texto
                },
                timeScale: {
                    timeVisible: true, // Hacer visible el eje del tiempo
                    borderVisible: false, // Ocultar el borde del eje del tiempo
                },
                grid: {
                    vertLines: {
                        color: 'rgba(244, 244, 244, 0.56)', // Oculta las líneas verticales
                        visible: false
                    },
                    horzLines: {
                        color: 'rgba(255, 255, 255, 0.56)', // Oculta las líneas horizontales
                        visible: false
                    }
                }
            });


            // Agregar una serie de área y establecer los datos
            const areaSeries = chart.addAreaSeries({
                topColor: 'rgba(255, 255, 255, 0.56)', // Color superior del degradado
                bottomColor: 'rgba(154, 154, 154, 0.04)', // Color inferior del degradado
                lineColor: 'white', // Color de la línea
                lineWidth: 2, // Grosor de la línea
            });

            // Establecer datos en la serie
            areaSeries.setData(store.graficaHome);

            // Ajustar el contenido al espacio visible
            chart.timeScale().fitContent();

            // Limpiar el gráfico al desmontar el componente
            return () => chart.remove();
        }
    }, [store.grafica]); // Escuchar cambios en los datos del gráfico

    return <div className='contenedor-componente-interactivo' ref={chartContainerRef} />;
};

export default GraficaHome;
