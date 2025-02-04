// chart.js

document.addEventListener('DOMContentLoaded', function () {
    // Data for the chart
    const labels = ['09/2024', '10/2024', '11/2024', '12/2024'];

    const snsData = [46.8, 41.4, 36, 48];
    const spsData = [7.7, 6.5, 5.3, 6.65];
    const sspData = [6.9, 7.35, 7.8, 6.55];
    const ndssData = [3.7, 3.9, 4.1, 3.5];
    const kpData = [4.7, 5.2, 5.7, 5.25];
    const miData = [4, 4.75, 5.5, 4.95];
    const zlfData = [2.3, 3.25, 4.2, 2.45];
    const npsData = [4, 3.4, 2.8, 3.1];
    const srceData = [2.2, 2.55, 2.9, 1.8];

    // Create the chart
    const ctx = document.getElementById('pollChart').getContext('2d');
    const pollChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'SNS',
                    data: snsData,
                    borderColor: 'blue',
                    fill: false,
                },
                {
                    label: 'SPS',
                    data: spsData,
                    borderColor: 'red',
                    fill: false,
                },
                {
                    label: 'SSP',
                    data: sspData,
                    borderColor: 'green',
                    fill: false,
                },
                {
                    label: 'NPS',
                    data: npsData,
                    borderColor: 'purple',
                    fill: false,
                },
                {
                    label: 'KP',
                    data: kpData,
                    borderColor: 'orange',
                    fill: false,
                },
                {
                    label: 'MI',
                    data: miData,
                    borderColor: 'yellow',
                    fill: false,
                },
                {
                    label: 'ZLF',
                    data: zlfData,
                    borderColor: 'pink',
                    fill: false,
                },
                {
                    label: 'NDSS',
                    data: ndssData,
                    borderColor: 'brown',
                    fill: false,
                },
                {
                    label: 'SRCE',
                    data: srceData,
                    borderColor: 'grey',
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Mesec/Godina',
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: '%',
                    },
                    beginAtZero: true,
                }
            }
        }
    });
});
