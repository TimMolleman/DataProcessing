/*
Naam: Tim Molleman
Studentnummer: 10587306
*/

d3.json("d3lineExtended.json", function(error, json) {
	
	// seperate data in JSON file for years
	var data_14 = json.fourteen;
	var data_15 = json.fifteen;

	// format to convert JSON-file months
	var format = d3.time.format("%B-%Y"),
		bisectDate = d3.bisector(function(d) { return d.month; }).left;

	// format data so it can be used efficiently
	for (i = 0; i < data_14.length; i++)
	{
		// transform temperature values from string type to numerical type
		data_14[i].temps.mean = Number(data_14[i].temps.mean)/10;
		data_14[i].temps.minimum = Number(data_14[i].temps.minimum)/10;
		data_14[i].temps.maximum = Number(data_14[i].temps.maximum)/10;
		data_15[i].temps.mean = Number(data_15[i].temps.mean)/10;
		data_15[i].temps.minimum = Number(data_15[i].temps.minimum)/10;
		data_15[i].temps.maximum = Number(data_15[i].temps.maximum)/10;

		// get Javascript dates for the months in JSON-file
		data_14[i].month = format.parse(data_14[i].month)
		data_15[i].month = format.parse(data_15[i].month);
	}

	// set margins for SVG and determine width and height of actual graph
	var margins = {left: 60, right: 30, top: 50, bottom: 75},
		width = 700 - margins.left - margins.right,
		height = 450 - margins.bottom - margins.top;

	// create scale for x-data
	var x = d3.time.scale()
			.domain(d3.extent(data_14, function(d) { return d.month; }))
			.rangeRound([0, width]);

	// create x-axis for data
	var xAxis = d3.svg.axis()
				.scale(x)
				.orient("bottom")
				.ticks(d3.time.months)
				.tickFormat(d3.time.format("%B"));

	// create scale for y-data
	var y = d3.scale.linear()
			.domain(d3.extent(data_14, function(d) { return d.temps.mean; }))
			.rangeRound([height, 0]);

	// create y-axis for data
	var yAxis = d3.svg.axis()
				.scale(y)
				.orient("left");
			
	// get the right coördinates for the line data 
	var line = d3.svg.line()
			.x(function(d) { return x(d.month); })
    		.y(function(d) { return y(d.temps.mean); });

    // append an svg element to body
	var canvas = d3.select("body").select("svg")
				.attr("width", width + margins.left + margins.right)
				.attr("height", height + margins.bottom + margins.top),
			g = canvas.append("g")
				.attr("transform", "translate(" + margins.left + "," + margins.top + ")");
	
	canvas.append("text")
			.attr("y", 20)
			.attr("x", 230)
			.style("font-size", 17)
			.style("font-weight", "bold")
			.text("Average temperatures in 2014 (per month)");


	// add the x-axis to the graph	
	g.append("g")
	    .attr("class", "x axis")
	    .attr("transform", "translate(0," + height + ")")
	    .call(xAxis)
	    .append("text")
	    .attr("class", "x label")
	    .text("Month");

	// add the y-axis to the graph
    g.append("g")
    	.attr("class", "y axis")
    	.call(yAxis)
    	.append("text")
    	.text("Temperature (in degrees Celcius)")
    	.attr("transform", "rotate(-90)")
		.attr("y", -40)
		.attr("x", -300);

    // add line to the graph
    g.append("path")
      .datum(data_14)
      .attr("class", "line")
      .style({
      	"fill":"none",
      	"stroke":"blue"
      })
      .attr("d", line);

    // rotate the text elements on the x-axis a little
    canvas.select(".x.axis")
    	.selectAll("text")
    	.attr("transform", "translate(-25,20) rotate(-45)");

    // give properties for the x-axis label
    canvas.select(".x.label")
    	.attr({
    		"transform": "translate(0,0) rotate(0)",
    		"x": 290,
    		"y": 60,
    	})
    	.style("font-size", 16);

    console.log(data_14[6 - 2]);

    // create a dot that will follow the mouse
    var focus = canvas.append("g")
    			.attr("class", "focus")
    			.attr("display", "none");

    focus.append("circle")
    		.attr("class", "y")
    		.attr("r", 5)
    		.style("fill", "none")
    		.style("stroke", "blue");

    canvas.append("rect")
      .style("fill", "none")
      .style("pointer-eventes", "all")
      .attr("class", "overlay")
      .attr("transform", "translate(" + margins.left + "," + margins.top + ")")
      .attr("width", width)
      .attr("height", height)
      .on("mouseover", function() { focus.style("display", null); })
      .on("mouseout", function() { focus.style("display", "none"); })
      .on("mousemove", mousemove);

    function mousemove() {
    	var x0 = x.invert(d3.mouse(this)[0]),
    		i = bisectDate(data_14, x0, 1),
    		d0 = data_14[i - 1],
      		d1 = data_14[i],
      		d = x0 - d0.month > d1.month - x0 ? d1 : d0;

      		focus.select(".circle.y")
		      .attr("transform",  
		            "translate(" + x(d.month) + "," +  
		                           y(d.close) + ")"); 
    };
})

