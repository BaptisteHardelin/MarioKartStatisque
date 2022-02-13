// Get the HTML canvas by its id 
let canvas = document.getElementById("canvas");
// Example datasets for X and Y-axes
let course = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']; //Stays on the X-axis 
let points = [] //Stays on the Y-axis

let input1 = document.getElementById('inputCourse1');

function addData(chart, data) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

// Create an instance of Chart object:
new Chart(canvas, {
    type: 'line', //Declare the chart type 
    data: {
        labels: course, //X-axis data 
        datasets: [{
            data: points, //Y-axis data 
            backgroundColor: '#5e440f',
            borderColor: 'white',
            fill: false, //Fills the curve under the line with the babckground color. It's true by default 
        }]
    },
});
