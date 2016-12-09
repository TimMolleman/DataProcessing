/*
Naam: Tim Molleman
Studentnummer: 10587306
*/

d3.json("d3line.json", function(error, json) {
	
	// seperate data in JSON file for years
	var data_14 = json.fourteen;
	var data_15 = json.fifteen;

	// format to convert JSON-file dates and for popup display, later on
	var format = d3.time.format("%B-%Y"),
		format_pop = d3.time.format("%b-%Y");

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

	// set margins for SVG and determine width and height of graph
	var margins = {left: 60, right: 60, top: 50, bottom: 75},
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

    // determine width and height of SVG element and determine graph position
	var canvas = d3.select("body").select("svg")
				.attr("width", width + margins.left + margins.right)
				.attr("height", height + margins.bottom + margins.top),
			g = canvas.append("g")
				.attr("transform", "translate(" + margins.left + "," + margins.top + ")");
	
	// add a title to the graph
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
      	"stroke":"#d94801"
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
    		"x": 280,
    		"y": 70,
    	})
    	.style("font-size", 16);

    // create a dot that will follow the mouse
    var focus = canvas.append("g")
    			.attr("class", "focus")
    			.style("display", "none");

    // append dot to focus that will follow the line in the graph on mousemove
    focus.append("circle")
    		.attr("class", "y")
    		.attr("r", 5)
    		.style("fill", "#d94801")
    		.style("stroke", "black");

    // append two text elements to focus to represent the data next to dot
    focus.append("text")
    		.attr("class", "popup p");

    focus.append("text")
    		.attr("class", "popup p1");

    // create a rectangle that detects if mouse is on graph or not
	// and call mousemove function when mouse moves on rectangle
    canvas.append("rect")
      .style("fill", "none")
      .style("pointer-events", "all")
      .attr("class", "overlay")
      .attr("transform", "translate(" + margins.left + "," + margins.top + ")")
      .attr("width", width)
      .attr("height", height)
      .on("mouseover", function() { focus.style("display", null); })
      .on("mouseout", function() { focus.style("display", "none"); })
      .on("mousemove", mousemove);

    // create function that returns either right or left datapoint of mouse
    var bisectDate = d3.bisector(function(d) { return d.month; }).left;
 
     /* this function makes the pointer set to the data point closest
    to the mouse and also shows the data that belongs to that data point */
    function mousemove() {
    	// get the right datapoint for the current mouse position
    	var x0 = x.invert(d3.mouse(this)[0]),
    		i = bisectDate(data_14, x0, 1),
    		d0 = data_14[i - 1],
      		d1 = data_14[i],
      		d = x0 - d0.month > d1.month - x0 ? d1 : d0;

      		// get coördinates of new position of the dot
      		var xPos = x(d.month) + margins.left,
      			yPos = y(d.temps.mean) + margins.top;

      	// move the dot to right positions on line
  		focus.select("circle.y")
	      .attr("transform",  
	            "translate(" + xPos + "," +  
	                           yPos + ")"); 

	    // show the data values next to the dot
	    focus.select("text.p")
	    	.attr("transform",  
	            "translate(" + (xPos + 20) + "," +  
	                           yPos + ")")
	    	.text(d.temps.mean + " C");

	    focus.select("text.p1")
		    .attr("transform",  
		            "translate(" + (xPos + 20) + "," +  
		                           (yPos + 15) + ")")
		    .text(format_pop(d.month));
    };
})

