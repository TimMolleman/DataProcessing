/*
Name: Tim Molleman
Student number: 10587306
*/

// country code information
var country_codes = [
    ["af", "AFG", "Afghanistan"],
    ["ax", "ALA", "Åland Islands"],
    ["al", "ALB", "Albania"],
    ["dz", "DZA", "Algeria"],
    ["as", "ASM", "American Samoa"],
    ["ad", "AND", "Andorra"],
    ["ao", "AGO", "Angola"],
    ["ai", "AIA", "Anguilla"],
    ["aq", "ATA", "Antarctica"],
    ["ag", "ATG", "Antigua and Barbuda"],
    ["ar", "ARG", "Argentina"],
    ["am", "ARM", "Armenia"],
    ["aw", "ABW", "Aruba"],
    ["au", "AUS", "Australia"],
    ["at", "AUT", "Austria"],
    ["az", "AZE", "Azerbaijan"],
    ["bs", "BHS", "Bahamas"],
    ["bh", "BHR", "Bahrain"],
    ["bd", "BGD", "Bangladesh"],
    ["bb", "BRB", "Barbados"],
    ["by", "BLR", "Belarus"],
    ["be", "BEL", "Belgium"],
    ["bz", "BLZ", "Belize"],
    ["bj", "BEN", "Benin"],
    ["bm", "BMU", "Bermuda"],
    ["bt", "BTN", "Bhutan"],
    ["bo", "BOL", "Bolivia"],
    ["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
    ["ba", "BIH", "Bosnia and Herzegovina"],
    ["bw", "BWA", "Botswana"],
    ["bv", "BVT", "Bouvet Island"],
    ["br", "BRA", "Brazil"],
    ["io", "IOT", "British Indian Ocean Territory"],
    ["bn", "BRN", "Brunei Darussalam"],
    ["bg", "BGR", "Bulgaria"],
    ["bf", "BFA", "Burkina Faso"],
    ["bi", "BDI", "Burundi"],
    ["kh", "KHM", "Cambodia"],
    ["cm", "CMR", "Cameroon"],
    ["ca", "CAN", "Canada"],
    ["ci", "CIV", "Ivory Coast"],
    ["cv", "CPV", "Cape Verde"],
    ["ky", "CYM", "Cayman Islands"],
    ["cf", "CAF", "Central African Republic"],
    ["td", "TCD", "Chad"],
    ["cl", "CHL", "Chile"],
    ["cn", "CHN", "China"],
    ["cx", "CXR", "Christmas Island"],
    ["cc", "CCK", "Cocos (Keeling) Islands"],
    ["co", "COL", "Colombia"],
    ["km", "COM", "Comoros"],
    ["cg", "COG", "Republic of the Congo"],
    ["cd", "COD", "Democratic Republic of the Congo"],
    ["ck", "COK", "Cook Islands"],
    ["cr", "CRI", "Costa Rica"],
    ["ci", "CIV", "Côte d'Ivoire"],
    ["hr", "HRV", "Croatia"],
    ["cu", "CUB", "Cuba"],
    ["cw", "CUW", "Curaçao"],
    ["cy", "CYP", "Cyprus"],
    ["cz", "CZE", "Czech Republic"],
    ["dk", "DNK", "Denmark"],
    ["dj", "DJI", "Djibouti"],
    ["dm", "DMA", "Dominica"],
    ["do", "DOM", "Dominican Republic"],
    ["ec", "ECU", "Ecuador"],
    ["eg", "EGY", "Egypt"],
    ["sv", "SLV", "El Salvador"],
    ["gq", "GNQ", "Equatorial Guinea"],
    ["er", "ERI", "Eritrea"],
    ["ee", "EST", "Estonia"],
    ["et", "ETH", "Ethiopia"],
    ["fk", "FLK", "Falkland Islands (Malvinas)"],
    ["fo", "FRO", "Faroe Islands"],
    ["fj", "FJI", "Fiji"],
    ["fi", "FIN", "Finland"],
    ["fr", "FRA", "France"],
    ["gf", "GUF", "French Guiana"],
    ["pf", "PYF", "French Polynesia"],
    ["tf", "ATF", "French Southern Territories"],
    ["ga", "GAB", "Gabon"],
    ["gm", "GMB", "Gambia"],
    ["ge", "GEO", "Georgia"],
    ["de", "DEU", "Germany"],
    ["gh", "GHA", "Ghana"],
    ["gi", "GIB", "Gibraltar"],
    ["gr", "GRC", "Greece"],
    ["gl", "GRL", "Greenland"],
    ["gd", "GRD", "Grenada"],
    ["gp", "GLP", "Guadeloupe"],
    ["gu", "GUM", "Guam"],
    ["gt", "GTM", "Guatemala"],
    ["gg", "GGY", "Guernsey"],
    ["gn", "GIN", "Guinea"],
    ["gw", "GNB", "Guinea-Bissau"],
    ["gy", "GUY", "Guyana"],
    ["ht", "HTI", "Haiti"],
    ["hm", "HMD", "Heard Island and McDonald Islands"],
    ["va", "VAT", "Holy See (Vatican City State)"],
    ["hn", "HND", "Honduras"],
    ["hk", "HKG", "Hong Kong"],
    ["hu", "HUN", "Hungary"],
    ["is", "ISL", "Iceland"],
    ["in", "IND", "India"],
    ["id", "IDN", "Indonesia"],
    ["ir", "IRN", "Iran"],
    ["iq", "IRQ", "Iraq"],
    ["ie", "IRL", "Ireland"],
    ["im", "IMN", "Isle of Man"],
    ["il", "ISR", "Israel"],
    ["it", "ITA", "Italy"],
    ["jm", "JAM", "Jamaica"],
    ["jp", "JPN", "Japan"],
    ["je", "JEY", "Jersey"],
    ["jo", "JOR", "Jordan"],
    ["kz", "KAZ", "Kazakhstan"],
    ["ke", "KEN", "Kenya"],
    ["ki", "KIR", "Kiribati"],
    ["kp", "PRK", "North Korea"],
    ["kr", "KOR", "South Korea"],
    ["kw", "KWT", "Kuwait"],
    ["kg", "KGZ", "Kyrgyzstan"],
    ["la", "LAO", "Laos"],
    ["lv", "LVA", "Latvia"],
    ["lb", "LBN", "Lebanon"],
    ["ls", "LSO", "Lesotho"],
    ["lr", "LBR", "Liberia"],
    ["ly", "LBY", "Libya"],
    ["li", "LIE", "Liechtenstein"],
    ["lt", "LTU", "Lithuania"],
    ["lu", "LUX", "Luxembourg"],
    ["mo", "MAC", "Macao"],
    ["mk", "MKD", "Macedonia"],
    ["mg", "MDG", "Madagascar"],
    ["mw", "MWI", "Malawi"],
    ["my", "MYS", "Malaysia"],
    ["mv", "MDV", "Maldives"],
    ["ml", "MLI", "Mali"],
    ["mt", "MLT", "Malta"],
    ["mh", "MHL", "Marshall Islands"],
    ["mq", "MTQ", "Martinique"],
    ["mr", "MRT", "Mauritania"],
    ["mu", "MUS", "Mauritius"],
    ["yt", "MYT", "Mayotte"],
    ["mx", "MEX", "Mexico"],
    ["fm", "FSM", "Micronesia, Federated States of"],
    ["md", "MDA", "Moldova"],
    ["mc", "MCO", "Monaco"],
    ["mn", "MNG", "Mongolia"],
    ["me", "MNE", "Montenegro"],
    ["ms", "MSR", "Montserrat"],
    ["ma", "MAR", "Morocco"],
    ["mz", "MOZ", "Mozambique"],
    ["mm", "MMR", "Myanmar"],
    ["na", "NAM", "Namibia"],
    ["nr", "NRU", "Nauru"],
    ["np", "NPL", "Nepal"],
    ["nl", "NLD", "Netherlands"],
    ["nc", "NCL", "New Caledonia"],
    ["nz", "NZL", "New Zealand"],
    ["ni", "NIC", "Nicaragua"],
    ["ne", "NER", "Niger"],
    ["ng", "NGA", "Nigeria"],
    ["nu", "NIU", "Niue"],
    ["nf", "NFK", "Norfolk Island"],
    ["mp", "MNP", "Northern Mariana Islands"],
    ["no", "NOR", "Norway"],
    ["om", "OMN", "Oman"],
    ["pk", "PAK", "Pakistan"],
    ["pw", "PLW", "Palau"],
    ["ps", "PSE", "Palestine, State of"],
    ["pa", "PAN", "Panama"],
    ["pg", "PNG", "Papua New Guinea"],
    ["py", "PRY", "Paraguay"],
    ["pe", "PER", "Peru"],
    ["ph", "PHL", "Philippines"],
    ["pn", "PCN", "Pitcairn"],
    ["pl", "POL", "Poland"],
    ["pt", "PRT", "Portugal"],
    ["pr", "PRI", "Puerto Rico"],
    ["qa", "QAT", "Qatar"],
    ["re", "REU", "Réunion"],
    ["ro", "ROU", "Romania"],
    ["ru", "RUS", "Russia"],
    ["rw", "RWA", "Rwanda"],
    ["bl", "BLM", "Saint Barthélemy"],
    ["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
    ["kn", "KNA", "Saint Kitts and Nevis"],
    ["lc", "LCA", "Saint Lucia"],
    ["mf", "MAF", "Saint Martin (French part)"],
    ["pm", "SPM", "Saint Pierre and Miquelon"],
    ["vc", "VCT", "Saint Vincent and the Grenadines"],
    ["ws", "WSM", "Samoa"],
    ["sm", "SMR", "San Marino"],
    ["st", "STP", "Sao Tome and Principe"],
    ["sa", "SAU", "Saudi Arabia"],
    ["sn", "SEN", "Senegal"],
    ["rs", "SRB", "Serbia"],
    ["sc", "SYC", "Seychelles"],
    ["sl", "SLE", "Sierra Leone"],
    ["sg", "SGP", "Singapore"],
    ["sx", "SXM", "Sint Maarten (Dutch part)"],
    ["sk", "SVK", "Slovakia"],
    ["si", "SVN", "Slovenia"],
    ["sb", "SLB", "Solomon Islands"],
    ["so", "SOM", "Somalia"],
    ["za", "ZAF", "South Africa"],
    ["gs", "SGS", "South Georgia and the South Sandwich Islands"],
    ["ss", "SSD", "South Sudan"],
    ["es", "ESP", "Spain"],
    ["lk", "LKA", "Sri Lanka"],
    ["sd", "SDN", "Sudan"],
    ["sr", "SUR", "Suriname"],
    ["sj", "SJM", "Svalbard and Jan Mayen"],
    ["sz", "SWZ", "Swaziland"],
    ["se", "SWE", "Sweden"],
    ["ch", "CHE", "Switzerland"],
    ["sy", "SYR", "Syria"],
    ["tw", "TWN", "Taiwan"],
    ["tj", "TJK", "Tajikistan"],
    ["tz", "TZA", "Tanzania"],
    ["th", "THA", "Thailand"],
    ["tl", "TLS", "Timor-Leste"],
    ["tg", "TGO", "Togo"],
    ["tk", "TKL", "Tokelau"],
    ["to", "TON", "Tonga"],
    ["tt", "TTO", "Trinidad and Tobago"],
    ["tn", "TUN", "Tunisia"],
    ["tr", "TUR", "Turkey"],
    ["tm", "TKM", "Turkmenistan"],
    ["tc", "TCA", "Turks and Caicos Islands"],
    ["tv", "TUV", "Tuvalu"],
    ["ug", "UGA", "Uganda"],
    ["ua", "UKR", "Ukraine"],
    ["ae", "ARE", "United Arab Emirates"],
    ["gb", "GBR", "United Kingdom"],
    ["us", "USA", "United States"],
    ["um", "UMI", "United States Minor Outlying Islands"],
    ["uy", "URY", "Uruguay"],
    ["uz", "UZB", "Uzbekistan"],
    ["vu", "VUT", "Vanuatu"],
    ["ve", "VEN", "Venezuela"],
    ["vn", "VNM", "Vietnam"],
    ["vg", "VGB", "Virgin Islands, British"],
    ["vi", "VIR", "Virgin Islands, U.S."],
    ["wf", "WLF", "Wallis and Futuna"],
    ["eh", "ESH", "Western Sahara"],
    ["ye", "YEM", "Yemen"],
    ["zm", "ZMB", "Zambia"],
    ["zw", "ZWE", "Zimbabwe"]];

d3.json("d3linkedJSON.json", function(error, json) {

    var data = json;

    // link country codes data to data in json file and store in array
    var codes_data = []

    for (i = 0; i < data.length; i++)
    {
        for (j = 0; j < country_codes.length; j++)
        {
            if (data[i].country == country_codes[j][2])
            {
                codes_data.push([country_codes[j][1], Number(data[i].datap.population), Number(data[i].datap.c_size),
                    Number(data[i].datap.density), data[i].country]);
            }
        }
    }

    // if a country code is not yet in codes_data, push it to codes_data
    // and set the value of to 'Unknown' (to avoid popup errors)
    for (i = 0; i < country_codes.length; i++)
    {
        state = false;
        for (j = 0; j < codes_data.length; j++)
        {
            if (country_codes[i][1] == codes_data[j][0])
            {
                state = true;
                break;
            }
        }
        if (state != true)
        {
            codes_data.push([country_codes[i][1], "Unknown"]);
        }
    }

    // create data structures to fill in forEach loop
    var dataset = {};
    var dataset2 = [];

    // fill datasets based on population size per country
    codes_data.forEach(function(item) {
        var color = null,
            country = item[4]
            code = item[0],
            population = item[1],
            size = item[2]
            density = item[3];

        // determine fillKey based on current population value    
        if (population == "Unknown")
        {
            dataset[code] = { inhabitants : population };
        }
        else
        {
            if (population < 5000000)
            {
                color = "< 5";
            }
            else if (population >= 5000000 && population < 10000000)
            {
                color = "5 - 10";
            }
            else if (population >= 10000000 && population < 25000000)
            {
                color = "10 - 25";
            }
            else if (population >= 25000000 && population < 75000000)
            {
                color = "25 - 75";
            }
            else if (population >= 75000000 && population < 100000000)
            {
                color = "75 - 100";
            }
            else if (population >= 100000000 && population < 200000000)
            {
                color = "100 - 200";
            }
            else if (population >= 200000000 && population < 1000000000)
            {
                color = "200 - 1000"
            }
            else
            {
                color = "> 1000"
            }

            // for every country make a key in dataset and add properties to determine color
            dataset[code] = { inhabitants : population, c_size : size, fillKey : color};

            // also create a dataset that will be used to create scatterplot, later on
            object = { country : country, ISO : code, population : population, c_size : size, density : density};
            dataset2.push(object);
        }
    });
    
    // function that returns population with commas after every 3 numbers
    function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // create a Datamap with dataset
    var basic_choropleth = new Datamap({
      element: document.getElementById("container"),
      projection: 'mercator',
          geographyConfig: {
            borderColor: 'rgba(255,255,255,0.3)',
            highlightBorderColor: 'rgba(0,0,0,0.5)',
                 popupTemplate: function(geo, data) {
                    if (data.inhabitants != "Unknown")
                    {
                        return "<div class='popup'><span style='font-weight:bold'>" + geo.properties.name +
                        "</span><br><span>Number of inhabitants: " + numberWithCommas(data.inhabitants) +  "</span></div>";
                    }
                    else
                    {
                        return "<div class='popup'><span style='font-weight:bold'>" + geo.properties.name +
                        "</span><br><span>No known data</span></div>";
                    }
                 },
                 popupOnHover: true,
                 highlightOnHover: true,
                 highlightFillColor: "yellow",
                 highlightBorderWidth: 2
        },
      fills: {
        defaultFill: "#f0f0f0",
        "< 5": "#fee6ce",
        "5 - 10": '#fdd0a2',
        "10 - 25": "#fdae6b",
        "25 - 75": "#fd8d3c",
        "75 - 100": "#f16913",
        "100 - 200": "#d94801",
        "200 - 1000": "#a63603",
        "> 1000": "#7f2704"
      },
      data: dataset
    });

    // add legend to the basic_chorpleth Datamap
    var legend_params = {
    legendTitle: "Number of inhabitants (in millions)"
    };
    basic_choropleth.legend(legend_params);

    /* d3 scatterplot part */

    /* first, create all functions for the visualizations that are created
    below */

     // function that will return color of dot based on population size
    var colorfunction = function(d) { 
        if (d.population < 5000000 )
            {
                return "#fee6ce";
            }
            else if (d.population >= 5000000 && d.population < 10000000 )
            {
                return "#fdd0a2";
            }
            else if (d.population >= 10000000 && d.population < 25000000 )
            {
                return "#fdae6b";
            }
            else if (d.population >= 25000000 && d.population < 75000000 )
            {
                return "#fd8d3c";
            }
            else if (d.population >= 75000000 && d.population < 100000000 )
            {
                return "#f16913";
            }
            else if (d.population >= 100000000 && d.population < 200000000 )
            {
                return "#d94801";
            }
            else if (d.population >= 200000000 && d.population < 1000000000 )
            {
                return "#a63603";
            }
            else
            {
                return "#7f2704";
            }
    }

    // function creates tooltip for the dot that the mouse is on
    function mouseover(d) {
        tooltip.transition()
               .duration(200)
               .style("opacity", .9);

        // get the text for the tooltip and show text
        tooltip.html(d.country + "</br> Population per km2: " + d.density)
               .style("left", (d3.event.pageX + 5) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
    }

    // function that lets tooltip fadeout if the mouse leaves the dot
    function mouseout(d) {
        tooltip.transition()
        .duration(800)
        .style("opacity", 0);
    }

    /* this function highlights the dot that is hovered over in corresponding
    country in datamap. Also highlights the corresponding bar graph (created
    later on in file) */
    function highlightdata() {
         basic_choropleth.svg.selectAll('.datamaps-subunit')
            .on('mouseenter', function(geography) {
                // change the size and color of the right dot
                d3.select('.' + geography.id + ".dot")
                        .transition()
                        .duration(400)
                        .style("fill", "yellow")
                        .attr("r", 6);

                // determine position of the tooltip
                var posX = Number(d3.select('.' + geography.id + '.dot').attr("cx")) + 95,
                    posY = Number(d3.select('.' + geography.id + '.dot').attr("cy")) + 725;

                // make tooltip appear
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9)

                var dens = undefined; 

                // find the right population density for current geography.id
                dataset2.forEach(function(item) {
                    if (item.ISO == geography.id)
                    {
                        dens = item.density;
                    }
                })

                // show tooltip at right position in the scatterplot
                tooltip.html(geography.properties.name + "</br> Population per km2: " + dens)
                    .style("left", (posX + "px"))
                    .style("top", (posY + "px"));

                // based on density value, change bar color to yellow
                if (dens < 50)
                {
                    d3.select(".low.bar")
                        .style("fill", "yellow")
                }
                else if (dens >= 50 && dens < 100)
                {
                    d3.select(".medlow.bar")
                        .style("fill", "yellow");
                }
                else if (dens >= 100 && dens < 300)
                {
                    d3.select(".med.bar")
                        .style("fill", "yellow");
                }
                else if (dens >= 300 && dens < 1000)
                {
                    d3.select(".medhigh.bar")
                        .style("fill", "yellow");
                }
                else
                {
                    d3.select(".high.bar")
                        .style("fill", "yellow");
                }
            })

            // change circle size and color to original state on mouseleave
            .on('mouseleave', function(geography) {
                d3.select('.' + geography.id + ".dot")
                    .transition()
                    .duration(400)
                    .style("fill", colorfunction)
                    .attr("r", 3)

                // tooltip fadeout on mouseleave 
                tooltip.transition()
                .duration(800)
                .style("opacity", 0);

                // also change bar colors to original color on mouseleave
                d3.selectAll('.bar')
                    .style("fill", "#d94801")
            })            
    };

    // determine width, height and margins of the svg element for scatterplot
    var margins = {left: 80, right: 60, top: 60, bottom: 75},
        width = 800 - margins.left - margins.right,
        height = 400 - margins.bottom - margins.top;

    // create scale for x-data (country size in squared kilometers)
    var x = d3.scale.linear()
            .domain(d3.extent(dataset2, function(d) { return Number(d.c_size /1000); }))
            .rangeRound([0, width]);

    // create x-axis for data
    var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .ticks(20);

    // create scale for y-data
    var y = d3.scale.linear()
            .domain(d3.extent(dataset2, function(d) { return Number(d.population / 1000000); }))
            .rangeRound([height, 0]);

    // functions that map datapoints to the right positions on the graph
     var xMap = function(d) { return x(Number(d.c_size / 1000));},
        yMap = function(d) { return y(Number(d.population / 1000000))};

    // create y-axis for data
    var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left");

    // append div element for tooltip on the scatterplot
    var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // adjust attributes of svg element and determine graph position
    var canvas = d3.select("div#scatterplot").append("svg")
                .attr("width", width + margins.left + margins.right)
                .attr("height", height + margins.bottom + margins.top),
            g = canvas.append("g")
                .attr("transform", "translate(" + margins.left + "," + margins.top + ")");

    // add the x-axis to the graph  
    g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("class", "x label")
        .text("Country size (per thousand squared kilometers)")
        .style("font-size", 18)
        .attr("y", 50)
        .attr("x", 175);

    // add the y-axis to the graph
    g.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .text("Inhabitants (in millions)")
        .style("font-size", 18)
        .attr("transform", "rotate(-90)")
        .attr("y", -55)
        .attr("x", -230);

    // append dot to every data point and draw it
    g.selectAll(".dot")
        .data(dataset2)
        .enter().append("circle")
        .attr("class", function(d) { return d.ISO + " dot"; })
        .attr("r", 3)
        .attr("cx", xMap)
        .attr("cy", yMap)
        .style("fill", colorfunction)
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

     // add title to the scatterplot
    canvas.append("text")
            .attr("y", 30)
            .attr("x", 220)
            .style("font-size", 20)
            .text("Number of inhabitants plotted against country size");

    /* d3 bargraph part */

    // create counters for density counts
    var count1 = 0,
    count2 = 0,
    count3 = 0,
    count4 = 0,
    count5 = 0;

    // create density data for the bar graph
    data_density = []
    dataset2.forEach(function(item){
        if (item.density < 50)
        {
            count1 = count1 + 1;
        }
        else if (item.density >= 50 && item.density < 100)
        {
            count2 = count2 + 1
        }
        else if (item.density >= 100 && item.density < 300)
        {
            count3 = count3 + 1;
        }
        else if (item.density >= 300 && item.density < 1000)
        {
            count4 = count4 + 1;
        }
        else
        {
            count5 = count5 + 1;
        }
    })

    // dataset to read in for bar graph
    data_density.push({level : "low", num : "< 50", density: count1}, 
        {level : "medlow", num : "50 - 100", density: count2}, 
        {level : "med", num : "100 - 300", density: count3}, 
        {level : "medhigh", num : "300 - 1000", density: count4},
        {level : "high", num : "> 1000", density: count5});

    // dataset to label and scale the x-axis
    data_x = ["< 50", "50 - 100", "100 - 300", "300 - 1000", "> 1000"];

    // define the margins of the barchart
    var margins2 = {top: 50, bottom: 40, left: 55, right : 0};

    // define the desired width of bars and desired space between bars
    var barWidth = 55;
    var barSpace = 20;

    // define the width of the svg element and height
    var width2 = (barWidth + barSpace) * data_x.length - margins2.left - margins2.right;
    var height2 = 500 - margins2.top - margins2.bottom;

    // create range for x-axis and x data
    var x2 = d3.scale.ordinal()
            .domain(data_x)
            .rangeRoundBands([0, width2], 0.38);

    // create x-axis
    var xAxis2 = d3.svg.axis()
                .scale(x2)
                .orient("bottom");

    // create range for y-axis and y data
    var y2 = d3.scale.linear()
            .domain([0, 80])
            .rangeRound([height2, 0]);

    // create y-axis
    var yAxis2 = d3.svg.axis()
                .scale(y2)
                .orient("left");

    // add an svg element to the body
    var canvas2 = d3.select("body").select("div#barchart").append("svg")
                    .attr("width", width2 + margins2.left + margins2.right)
                    .attr("height", height2 + margins2.top + margins2.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margins2.left + "," + margins2.top + ")");

    // append a g element for every data point in data_density
    var bar = canvas2.selectAll("g")
            .data(data_density)
            .enter()
            .append("g");

    // make a rectangle in every bar element for all data points
    bar.append("rect")
        .attr("class", function(d) { return d.level + " bar"})
        .attr("x", function(d) { return x2(d.num); })
        .attr("y", function(d) { return y2(d.density); })
        .attr("height", function(d) { return height2 - y2(d.density); })
        .attr("width", barWidth - barSpace)
        .attr("fill", "#d94801");

    // add the x-axis to the svg element
    canvas2.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0, " + height2 + ")")
            .call(xAxis2)
            .append("text")
            .text("Population density per km2")
            .attr("y", +35)
            .attr("x", +70)
            .style("font-size", 15);

    // add the y-axis to svg element
    canvas2.append("g")
            .attr("class", "y axis")
            .call(yAxis2)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", -35)
            .attr("x", -250)
            .text("Number of countries")
            .style("font-size", 15);

    // add title to the barchart
    canvas2.append("text")
            .attr("y", -20)
            .attr("x", -10)
            .style("font-size", 18)
            .text("Number of countries per densities interval");

    // call highlight function
    highlightdata();
});