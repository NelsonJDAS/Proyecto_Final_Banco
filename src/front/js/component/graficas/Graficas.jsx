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
                width: 600,
                height: 300,
            });

            // Agregar una serie de líneas y establecer los datos
            const lineSeries = chart.addLineSeries();
            lineSeries.setData(store.chartData);

            // Limpiar el gráfico al desmontar el componente
            return () => chart.remove();
        }
    }, [store.chartData]); // Escuchar cambios en los datos del gráfico

    return <div ref={chartContainerRef} />;
};

export default Graficas;