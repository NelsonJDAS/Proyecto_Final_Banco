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
                height: 200,
                layout: {
                    background: {
                        type: 'Solid', // También puedes usar 'VerticalGradient' o 'HorizontalGradient' para degradados
                        color: 'rgba(0, 0, 0, 0)' // Aquí pones el color de fondo deseado, por ejemplo, gris claro
                    },
                    textColor: 'gray' // Opcional: el color del texto (ejes y etiquetas)
                },
                timeScale: {
                    // Configura un rango de tiempo visible al cargar el gráfico
                    visible: true,
                    timeVisible: true,
                    minBarSpacing: 10,
                    borderVisible: false,
                    // Establecer un zoom inicial (puedes ajustar estos valores)
                    zoomLevel: 2, // Ajusta el nivel de zoom inicial en el eje X
                },
                priceScale: {
                    // Configura un rango de precios visible al cargar el gráfico
                    visible: true,
                    borderVisible: false,
                    autoScale: true, // Esto asegura que el gráfico escale automáticamente para ajustarse a los datos
                    scaleMargins: {
                        top: 0.1,  // Margen superior
                        bottom: 0.1 // Margen inferior
                    }
                }

            });


            // Agregar una serie de líneas y establecer los datos
            const lineSeries = chart.addLineSeries({
                color: 'gray', // Aquí defines el color de la línea (por ejemplo, rojo)
                lineWidth: 3      // Opcional: grosor de la línea
            });
            lineSeries.setData(store.chartData);

            // Limpiar el gráfico al desmontar el componente
            return () => chart.remove();
        }
    }, [store.chartData]); // Escuchar cambios en los datos del gráfico

    return <div className='contenedor-componente-interactivo' ref={chartContainerRef} />;
};

export default GraficaInversionVista;