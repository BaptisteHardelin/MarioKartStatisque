var dps = [];   //dataPoints. 

var chart = new CanvasJS.Chart("chartContainer", {
    title: {
        text: "Point Mario Kart"
    },
    data: [{
        type: "line",
        dataPoints: dps
    }]
});

function addDataPointsAndRender() {
    xValue = Number(document.getElementById('xValue').value);
    yValue = Number(document.getElementById('yValue').value);
    dps.push({
        x: xValue,
        y: yValue
    });
    chart.render();
}

var renderButton = document.getElementById('renderButton');
renderButton.addEventListener('click', addDataPointsAndRender);