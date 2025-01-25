
import React, { useEffect, useContext, useRef } from 'react';
import { Context } from "../../store/appContext.js";
import { createChart } from 'lightweight-charts';

const GraficaInversionVista = () => {
    const { store, actions } = useContext(Context); // Accede al contexto
    const chartContainerRef = useRef(null);

    useEffect(() => {
        // Llamar a la acción para obtener los datos
        actions.fetchGraficasData();
    }, []);

    useEffect(() => {
        if (store.chartData.length > 0) {
            // Crear el gráfico
            const chart = createChart(chartContainerRef.current, {
                height: 180, // Ajusta la altura según sea necesario
                layout: {
                    background: {
                        type: 'solid', // Tipo de fondo sólido
                        color: 'rgba(0, 0, 0, 0)' // Color de fondo blanco
                    },
                    textColor: 'gray' // Color del texto
                },
                timeScale: {
                    timeVisible: true, // Hacer visible el eje del tiempo
                    borderVisible: false, // Ocultar el borde del eje del tiempo
                },
                priceScale: {
                    borderVisible: false, // Ocultar el borde del eje de precios
                },
            });


            // Agregar una serie de área y establecer los datos
            const areaSeries = chart.addAreaSeries({
                topColor: 'rgba(41, 98, 255, 0.56)', // Color superior del degradado
                bottomColor: 'rgba(95, 138, 255, 0.04)', // Color inferior del degradado
                lineColor: '#2962FF', // Color de la línea
                lineWidth: 2, // Grosor de la línea
            });

            // Establecer datos en la serie
            areaSeries.setData(store.chartData);

            // Ajustar el contenido al espacio visible
            chart.timeScale().fitContent();

            // Limpiar el gráfico al desmontar el componente
            return () => chart.remove();
        }
    }, [store.chartData]); // Escuchar cambios en los datos del gráfico

    return <div className='contenedor-componente-interactivo' ref={chartContainerRef} />;
};

export default GraficaInversionVista;
