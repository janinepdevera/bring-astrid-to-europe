
document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded.")
});

const currentNumber = 3000;

const container = d3.select("#progress-bar");

const dim = { width: 500, height: 30 };

const xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 700]);

const svg = container.append("svg")
    .attr("width", dim.width)
    .attr("height", dim.height)
    .attr("viewBox", [0, 0, dim.width, dim.height])

svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", dim.width)
    .attr("height", dim.height)
    .style("fill", "#EDEDED");

svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", xScale(100 * (currentNumber / 50000)))
    .attr("height", dim.height)
    .style("fill", "#2c76afff");

svg.append("g")
    .append("text")
    .attr("class", "bar-text")
    .attr("text-anchor", "end")
    .attr("dominant-baseline", "central")
    .attr("x", xScale(100 * (currentNumber / 50000)) - 5)
    .attr("y", dim.height / 2)
    .text(100 * (currentNumber / 50000) + "%")


