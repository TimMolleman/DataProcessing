/*
Naam: Tim Molleman
Studentnummer: 10587306
*/

d3.json("d3lineExtended.json", function(error, json) {
	
	// seperate data in JSON file for years
	var data_14 = json.fourteen;
	var data_15 = json.fifteen;

	// format to convert JSON-file months
	var format = d3.time.format("%B-%Y")
		format_pop = d3.time.format("%b-%Y"),
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

	/* this function is used whenever another year is chosen in the drop-down
	menu. it draws an entirely new SVG for the year that is chosen */
	function loadSvg(data) {

		// first remove the old svg
		d3.select("svg").remove();

		// set margins for SVG's and determine width and height of graph
		var margins = {left: 60, right: 120, top: 40, bottom: 75},
			width = 700 - margins.left - margins.right,
			height = 450 - margins.bottom - margins.top;

		// create scale for x-data
		var x = d3.time.scale()
				.domain(d3.extent(data, function(d) { return d.month; }))
				.rangeRound([0, width]);

		// create x-axis for data
		var xAxis = d3.svg.axis()
					.scale(x)
					.orient("bottom")
					.ticks(d3.time.months)
					.tickFormat(d3.time.format("%B"));

		// create scale for y-data
		var y = d3.scale.linear()
				.domain([d3.min(data, function(d) { return d.temps.minimum; }), d3.max(data, function(d) {
					return d.temps.maximum; })])
				.rangeRound([height, 0]);

		var z = d3.scale.ordinal(d3.schemeCategory10);
		console.log(z);

		// create y-axis for data
		var yAxis = d3.svg.axis()
					.scale(y)
					.orient("left");
				
		// get the right coördinates for all the line data 
		var line = d3.svg.line()
				.x(function(d) { return x(d.month); })
	    		.y(function(d) { return y(d.temps.mean); }),
	    	line_min = d3.svg.line()
				.x(function(d) { return x(d.month); })
	    		.y(function(d) { return y(d.temps.minimum); }),
	    	line_max = d3.svg.line()
				.x(function(d) { return x(d.month); })
	    		.y(function(d) { return y(d.temps.maximum); });

	    // append an svg element to body
		var canvas = d3.select("body").select(".svg").append("svg")
					.attr("width", width + margins.left + margins.right)
					.attr("height", height + margins.bottom + margins.top),
				g = canvas.append("g")
					.attr("transform", "translate(" + margins.left + "," + margins.top + ")");
		
		// get right year for the title of the graph
		if (data == data_14)
		{
			year = "2014";
		}
		else 
		{
			year = "2015";
		}

		// add title to the graph
		canvas.append("text")
				.attr("y", 20)
				.attr("x", 130)
				.style("font-size", 17)
				.style("font-weight", "bold")
				.text("Temperature information for the Netherlands (" + year + ")");

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
			.attr("x", -275);

	    // add lines to the graph
	    g.append("path")
	      .datum(data)
	      .attr("class", "line")
	      .style({
	      	"fill":"none",
	      	"stroke":"orange"
	      })
	      .attr("d", line)

	    g.append("path")
	      .datum(data)
	      .attr("class", "line")
	      .style({
	      	"fill":"none",
	      	"stroke":"blue"
	      })
	      .attr("d", line_min);

	    g.append("path")
	      .datum(data)
	      .attr("class", "line")
	      .style({
	      	"fill":"none",
	      	"stroke":"red"
	      })
	      .attr("d", line_max);

	    // rotate the text elements on the x-axis a little
	    canvas.select(".x.axis")
	    	.selectAll("text")
	    	.attr("transform", "translate(-25,20) rotate(-45)");

	    // give properties for the x-axis label
	    canvas.select(".x.label")
	    	.attr({
	    		"transform": "translate(0,0) rotate(0)",
	    		"x": 250,
	    		"y": 70,
	    	})
	    	.style("font-size", 16);

	     // append "g" elements for dots that will track line
	    var focus = canvas.append("g")
	    			.attr("class", "focus")
	    			.style("display", "none");

	    // append 3 dots for min, max and mean temperatures
	    focus.append("circle")
	    		.attr("class", "ymean")
	    		.attr("r", 5)
	    		.style("fill", "orange")
	    		.style("stroke", "black");

	    focus.append("circle")
	    		.attr("class", "ymin")
	    		.attr("r", 5)
	    		.style("fill", "blue")
	    		.style("stroke", "black");

	    focus.append("circle")
	    		.attr("class", "ymax")
	    		.attr("r", 5)
	    		.style("fill", "red")
	    		.style("stroke", "black");

	   	var size = Object.keys(data[0].temps).length;

	   	// append two text elements for every circle appended to focus
	    for (i = 0; i <= (size * 2); i++)
	    {
	    	focus.append("text")
	    			.attr("class", "popup p" + i);
	    }

	    // append vertical line that goes through all dots on chart
	    focus.append("line")
	        .attr("class", "x")
	        .style("stroke", "black")
	        .style("stroke-dasharray", "4.5")
	        .style("opacity", 0.5)
	        .attr("y1", 0)
	        .attr("y2", height);

	    // create a rectangle that detects if mouse is on graph or not
	    // and call mousemove function when mouse moves on graph
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

	    /* this function makes the pointer set to the data point closest
	    to the mouse and also shows the data that belongs to that data point */
	    function mousemove() {
	    	// get the right datapoint for the current mouse position
	    	var x0 = x.invert(d3.mouse(this)[0]),
	    		i = bisectDate(data, x0, 1),
	    		d0 = data[i - 1],
	      		d1 = data[i],
	      		d = x0 - d0.month > d1.month - x0 ? d1 : d0;

      		// get the positions for the three dots
      		var xPos = x(d.month) + margins.left,
	      		yPosMean = y(d.temps.mean) + margins.top,
	      		yPosMin = y(d.temps.minimum) + margins.top,
	      		yPosMax = y(d.temps.maximum) + margins.top;

      		// move the three dots to right positions on line
      		focus.select("circle.ymean")
		      .attr("transform",  
		            "translate(" + xPos + "," +  
		                           yPosMean + ")"); 

		    focus.select("circle.ymin")
		      .attr("transform",  
		            "translate(" + xPos + "," +  
		                           yPosMin + ")"); 

		    focus.select("circle.ymax")
		      .attr("transform",  
		            "translate(" + xPos + "," +  
		                           yPosMax + ")"); 

		    // show the data values next to the dots
		    focus.select("text.p0")
		    	.attr("transform",  
		            "translate(" + (xPos + 20) + "," +  
		                           yPosMean + ")")
		    	.text(d.temps.mean + " C (Average)");

		    focus.select("text.p1")
			    .attr("transform",  
			            "translate(" + (xPos + 20) + "," +  
			                           (yPosMean + 15) + ")")
			    .text(format_pop(d.month));

			focus.select("text.p3")
		    	.attr("transform",  
		            "translate(" + (xPos + 20) + "," +  
		                           yPosMin + ")")
		    	.text(d.temps.minimum + " C (Min)");

		    focus.select("text.p4")
			    .attr("transform",  
			            "translate(" + (xPos + 20) + "," +  
			                           (yPosMin + 15) + ")")
			    .text(format_pop(d.month));

			focus.select("text.p5")
		    	.attr("transform",  
		            "translate(" + (xPos + 20) + "," +  
		                           yPosMax + ")")
		    	.text(d.temps.maximum + " C (Max)");

		    focus.select("text.p6")
			    .attr("transform",  
			            "translate(" + (xPos + 20) + "," +  
			                           (yPosMax + 15) + ")")
			    .text(format_pop(d.month));

			focus.select(".x")
			    .attr("transform",
			            "translate(" + xPos + "," +
			                            + margins.top + ")")
	    };
    };

    // in browser, show graph of 2014 data as standard graph
    loadSvg(data_14);

	// on click of the drop down menu, select the data to be used
	d3.selectAll(".m")
		.on("click", function() {
			var date = this.getAttribute("value");

	if (date == "2015")
	{
		data = data_15;
	}
	else
	{
		data = data_14
	}

	// call the loadSvg function with data of year selected in drop-down menu
	loadSvg(data);
    });
})