var data = [
    {x: -10, y: 50},
    {x: -5, y: 50},
    {x: 0, y: 20},
    {x: 5, y: 45},
    {x: 10, y: 35},
    {x: 12, y: 70},
];
var  data2 = [
    {x: -5, y: 30},
    {x: -1, y: 10},
    {x: 1, y: 40},
    {x: 2, y: 35},
    {x: 13, y: 25},
    {x: 16, y: 80},
]
var  data3 = [
    {x: -2, y: 90},
    {x: -10, y: 34},
    {x: 15, y: 58},
    {x: 24, y: 45},
    {x: 23, y: 15},
    {x: 6, y: 40},
]
var  data4 = [
    {x: -4, y: 70},
    {x: -9, y: 30},
    {x: 15, y: 64},
    {x: 24, y: 94},
    {x: 63, y: 35},
    {x: 56, y: 20},
]
var  data5 = [
    {x: -6, y: 50},
    {x: -5, y: 90},
    {x: 15, y: 10},
    {x: 25, y: 65},
    {x: 16, y: 23},
    {x: 11, y: 60},
]

// Set up the SVG container
var margin = { top: 20, right: 20, bottom: 50, left: 50 };
var width = 400 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

var svg = d3.select("#chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Set up scales with custom domains
var xScale = d3.scaleLinear()
    .domain([-10, 12])
    .range([0, width]);

var yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

// Define the line
var line = d3.line()
    .x(function(d) { return xScale(d.x); })
    .y(function(d) { return yScale(d.y); });

// Append the line to the chart
var path = svg.append("path")
    .data([data])
    .attr("class", "line")
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2); // Initial line thickness

var path2 = svg.append("path")
    .data([data2])
    .attr("class", "line")
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2); // Initial line thickness


    var path3 = svg.append("path")
    .data([data3])
    .attr("class", "line")
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2); // Initial line thickness


    var path4 = svg.append("path")
    .data([data4])
    .attr("class", "line")
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2); // Initial line thickness


    var path5 = svg.append("path")
    .data([data5])
    .attr("class", "line")
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2); // Initial line thickness
// Add event listeners for hover effect


path.on("mouseover", function(){
    d3.select(this).attr("stroke", "red").attr("stroke-width", 4);
})
.on("mouseout", function(){
    d3.select(this).attr("stroke", "steelblue").attr("stroke-width", 2);
});

path2.on("mouseover", function(){
    d3.select(this).attr("stroke", "red").attr("stroke-width", 4);
})
.on("mouseout", function(){
    d3.select(this).attr("stroke", "steelblue").attr("stroke-width", 2);
});

path3.on("mouseover", function(){
    d3.select(this).attr("stroke", "red").attr("stroke-width", 4);
})
.on("mouseout", function(){
    d3.select(this).attr("stroke", "steelblue").attr("stroke-width", 2);
});

path4.on("mouseover", function(){
    d3.select(this).attr("stroke", "red").attr("stroke-width", 4);
})
.on("mouseout", function(){
    d3.select(this).attr("stroke", "steelblue").attr("stroke-width", 2);
});

path5.on("mouseover", function(){
    d3.select(this).attr("stroke", "red").attr("stroke-width", 4);
})

.on("mouseout", function(){
    d3.select(this).attr("stroke", "steelblue").attr("stroke-width", 2);
});

// Add x-axis
svg.append("g")
    .attr('transform', "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

// Add x-axis label
svg.append("text")
    .attr("transform", "translate(" + (width / 2) + ',' + (height + margin.bottom) + ")")
    .style("text-anchor", 'middle')
    .text('X Axis ');

// Add y-axis with custom ticks
svg.append('g')
    .call(d3.axisLeft(yScale)
        .ticks(5) // Number of ticks
        .tickFormat(d3.format(".0f")) // Format the tick values as integers
    );

// Add y-axis label
svg.append('text')
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text('Y Axis ');






