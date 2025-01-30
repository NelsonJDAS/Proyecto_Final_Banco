import React, { useEffect, useContext, useRef } from 'react';
import { Context } from "../../store/appContext.js";
import { createChart } from 'lightweight-charts';

const Graficas = () => {
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
                layout: {
                    background: {
                        type: 'Solid', // También puedes usar 'VerticalGradient' o 'HorizontalGradient' para degradados
                        color: 'rgba(0, 0, 0, 0)' // Aquí pones el color de fondo deseado, por ejemplo, gris claro
                    },
                    textColor: 'white', // Opcional: el color del texto (ejes y etiquetas)
                },
                grid: {
                    vertLines: {
                        color: 'transparent' // Líneas verticales transparentes (las oculta)
                    },
                    horzLines: {
                        color: '#e0e0e0' // Opcional: Color de las líneas horizontales (puedes personalizarlo o hacerlo transparente también)
                    },
                },
            });


            // Agregar una serie de líneas y establecer los datos
            const lineSeries = chart.addLineSeries({
                color: 'white', // Aquí defines el color de la línea (por ejemplo, rojo)
                lineWidth: 3      // Opcional: grosor de la línea
            });
            lineSeries.setData(store.chartData);

            // Limpiar el gráfico al desmontar el componente
            return () => chart.remove();
        }
    }, [store.chartData]); // Escuchar cambios en los datos del gráfico

    return <div className='contenedor-componente-interactivo' ref={chartContainerRef} />;
};

export default Graficas;