/*
Naam: Tim Molleman
Studentnummer: 10587306
*/

d3.json("points.json", function(error, json) {

	// store the json data in a variable
	var data = json.points;

	// create array to store y-data in
	ydata = [];

	// y-axis data in array
	for (i = 0; i < data.length; i++)
	{
		ydata[i] = Number(data[i].percentage);
	}
	// safe the maximum of the ydata array in a variable
	var ymax = Math.max(...ydata);
	
	// define the desired width of bars and desired space between bars
	var barWidth = 45;
	var barSpace = 10;

	// define the margins of the barchart
	var margin = {top: 30, bottom: 40, left: 55, right : 0};

	// define the width and the height of the canvas
	var width = (barWidth + barSpace) * data.length - margin.left - margin.right;
	var height = 400 - margin.top - margin.bottom;

	// create range for x-axis and x data
	var x = d3.scale.ordinal()
			.domain(data.map(function(d) { return d.hours; }))
			.rangeRoundBands([0, width], 0.2);

	// create x-axis
	var xAxis = d3.svg.axis()
				.scale(x)
				.orient("bottom");

	// create range for y-axis and y data
	var y = d3.scale.linear()
			.domain([0, ymax])
			.rangeRound([height, 0]);

	// create y-axis
	var yAxis = d3.svg.axis()
				.scale(y)
				.orient("left")
				.tickFormat(function(d) { return d + "%"; });

	// create a tooltip that gives info on data value
	var tip = d3.tip()
				.attr("class", "d3tip")
				.offset([-10, 0])
				.html(function(d) { return "<strong>Alcohol retained:</strong> <span style='color:red'>" 
					+ d.percentage + "%</span>"; });

	// add an svg element to the body
	var canvas = d3.select("body").select("svg")
					.attr("width", width + margin.left + margin.right)
					.attr("height", height + margin.top + margin.bottom)
					.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// add title to the graph
	canvas.append("text")
			.attr("y", -10)
			.attr("x", 140)
			.style("font-size", 12)
			.style("font-weight", "bold")
			.text("Alcohol retained when baked in mixture");
					
	// create the bar graph
	var bar = canvas.selectAll("g")
			.data(data)
			.enter()
			.append("g");

	// make a rectangle in every g element for all data points
	bar.append("rect")
		.attr("x", function(d, i) { return x(d.hours); })
		.attr("y", function(d) { return y(d.percentage); })
		.attr("height", function(d) { return height - y(d.percentage); })
		.attr("width", barWidth - barSpace)
		.attr("fill", "#feb24c")
		.call(tip)
		.on("mouseover", tip.show)
		.on("mouseout", tip.hide);
		
	// add the x-axis to the svg element
	canvas.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0, " + height + ")")
			.call(xAxis)
			.append("text")
			.text("Time (Hours)")
			.attr("y", +35)
			.attr("x", +140)
			.style("font-size", 15);

	// add the y-axis to svg element
	canvas.append("g")
			.attr("class", "y axis")
			.call(yAxis)
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", -35)
			.attr("x", -175)
			.text("Percentage of Alcohol Retained")
			.style("font-size", 15);
});


