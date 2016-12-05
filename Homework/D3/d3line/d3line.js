/*
Naam: Tim Molleman
Studentnummer: 10587306
*/

d3.json("d3line.json", function(error, json) {
	
	// seperate data in JSON file for year
	var data_14 = json.fourteen;
	var data_15 = json.fifteen;

	// convert the temperature properties to numerical values
	for (i = 0; i < data_14.length; i++)
	{
		data_14[i].temps.mean = Number(data_14[i].temps.mean);
		data_14[i].temps.minimum = Number(data_14[i].temps.minimum);
		data_14[i].temps.maximum = Number(data_14[i].temps.maximum);
		data_15[i].temps.mean = Number(data_15[i].temps.mean);
		data_15[i].temps.minimum = Number(data_15[i].temps.minimum);
		data_15[i].temps.maximum = Number(data_15[i].temps.maximum);
	}

	var format = d3.time.format("%B-%Y");
	console.log(format.parse("January-2014"));
	console.log(new Date("January-2014"));

	// set margins of SVG and determine width and height of actual graph
	var margins = {left: 30, right: 10, top: 20, bottom: 50},
		width = 700 - margins.left - margins.right,
		height = 450 - margins.bottom - margins.top;

	// get the scale for the x-axis and y-axis
	var x = d3.scale.ordinal()
			.domain(data_14.map(function(d) { return d.month; }))
			.rangeRoundBands([0, width]);

	var xAxis = d3.svg.axis()
				.scale(x)
				.orient("bottom")
				// .ticks(d3.time.months)
				// .tickFormat(d3.time.format("%B"));

	var y = d3.scale.linear()
			.domain(d3.extent(data_14, function(d) { return d.temps.mean; }))
			.rangeRound([height, 0]);

	var yAxis = d3.svg.axis()
				.scale(y)
				.orient("left");
			
	// define d3 line shit
	var line = d3.svg.line()
			.x(function(d) { return x(d.month); })
    		.y(function(d) { return y(d.temps.mean); });

    console.log(line);

	var canvas = d3.select("body").append("svg")
				.data(data_14)
				.attr("width", width + margins.left + margins.right)
				.attr("height", height + margins.bottom + margins.top),
			g = canvas.append("g")
				.attr("transform", "translate(" + margins.left + "," + margins.top + ")");
				
	g.append("g")
	    .attr("class", "x axis")
	    .attr("transform", "translate(0," + height + ")")
	    .call(xAxis);

    g.append("g")
    	.attr("class", "y axis")
    	.call(yAxis);

    g.append("path")
      .datum(data_14)
      .attr("class", "line")
      .style({
      	"fill":"none",
      	"stroke":"blue"
      })
      .attr("d", line);

    // canvas.select(".x.axis")
    // 	.selectAll("text")
    // 	.attr("transform", "translate(0,15) rotate(-65)");
})


	// var timeFormat = d3.time.format("%B")
	// // var timeParse = d3.time.parse("%b")

	// var date = f.parse("2014-07-10");
	// console.log(date);

	// console.log(timeParse('Jan'));


	// // creat time formatter for the x-axis
	// var format = d3.time.format("%B");
	// console.log(format(d));
