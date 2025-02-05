import React, { useEffect, useContext, useRef } from 'react';
import { Context } from "../../store/appContext.js";
import { createChart } from 'lightweight-charts';

const GraficaHome = () => {
    const { store, actions } = useContext(Context);
    const chartContainerRef = useRef(null);

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
                        type: 'solid',
                        color: 'rgba(234, 234, 234, 0)' // Fondo transparente
                    },
                    textColor: 'white',
                },
                timeScale: {
                    timeVisible: true, // Hacer visible el eje del tiempo
                    borderVisible: false, // Ocultar el borde del eje del tiempo
                    mouseWheelZoom: false, // Deshabilitar zoom con la rueda del ratón
                    dragToZoom: false, // Deshabilitar el arrastre para hacer zoom
                    pinchToZoom: false // Deshabilitar zoom con gestos de pinza

                },
                grid: {
                    vertLines: { color: 'rgba(244, 244, 244, 0.56)', visible: false },
                    horzLines: { color: 'rgba(255, 255, 255, 0.56)', visible: false }
                },
            });

            // Agregar una serie de área
            const areaSeries = chart.addAreaSeries({
                topColor: 'rgba(0, 255, 0, 0.67)',  // Color para ingresos (verde claro)
                bottomColor: 'rgba(0, 255, 0, 0)', // Color de fondo de ingresos (transparente)
                lineColor: 'green',  // Color de la línea para ingresos
                lineWidth: 4,
            });

            // Si tienes datos con valores negativos (gastos), puedes representar los gastos en rojo
            const redAreaSeries = chart.addAreaSeries({
                topColor: 'rgba(255, 0, 0, 0.61)',  // Color para gastos (rojo claro)
                bottomColor: 'rgba(255, 0, 0, 0)', // Color de fondo de gastos (transparente)
                lineColor: 'red',  // Color de la línea para gastos
                lineWidth: 4,
            });

            // Mapear tus datos (asegurarte de que los gastos son negativos)
            const mapeoNegativos = store.graficaHome.map(item => ({
                time: item.time,
                value: item.value < 0 ? item.value : 0 // Si es gasto negativo, lo representas aquí
            }));

            const mapeoPositivos = store.graficaHome.map(item => ({
                time: item.time,
                value: item.value > 0 ? item.value : 0 // Si es ingreso positivo, lo representas aquí
            }));

            // Establecer los datos en las series respectivas
            redAreaSeries.setData(mapeoNegativos);  // Para gastos negativos
            areaSeries.setData(mapeoPositivos);  // Para ingresos positivos

            // Ajustar el gráfico al contenido
            chart.timeScale().fitContent();

            // Limpiar el gráfico al desmontar el componente
            return () => chart.remove();
        }
    }, [store.graficaHome]); // Escuchar cambios en los datos

    return <div className="contenedor-componente-interactivo" ref={chartContainerRef} />;
};

export default GraficaHome;



