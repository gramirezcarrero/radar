var w = 400,
	h = 400;

var colorscale = d3.scale.category10();
var color = ['red', 'orange', 'green']
//Legend titles
var LegendOptions = ['Riesgo 1', 'Riesgo 2', 'Riesgo 3'];

//Data
var d = [[
			{axis:"",value:0.6},
			{axis:"",value:0.6},
			{axis:"",value:0.6},
			{axis:"",value:0.6},
			{axis:"",value:0.6},
			{axis:"",value:0.6},
			{axis:"",value:0.6},
			{axis:"",value:0.6},
			{axis:"",value:0.6},
			{axis:"",value:0.6},
			{axis:"",value:0.6},
			{axis:"",value:0.6}
			],[
			{axis:"1",value:0},
			{axis:"asd",value:0},
			{axis:"",value:10},
			{axis:"",value:5},
			{axis:"",value:8},
			{axis:"",value:0},
			{axis:"",value:3},
			{axis:"",value:0},
			{axis:"",value:0},
			{axis:"",value:0},
			{axis:"",value:0},
			{axis:"",value:0}
		]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 5,
	baseColor: ['transparent', 'lightgray'],
  ExtraWidthX: 300
}
var mycfg2 = {
  w: 50,
  h: 50,
	radius: 0.4,
  maxValue: 0.6,
  levels: 5,
	baseColor: ['transparent', 'red'],
  ExtraWidthX: 30,
  ExtraWidthY: 0,
	TranslateX: 11,
	TranslateY: 0,
}
//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);
RadarChart.draw("#thun", d, mycfg2);
RadarChart.draw("#thun1", d, mycfg2);
RadarChart.draw("#thun2", d, mycfg2);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////
// viewBox="0 0 300 329" preserveAspectRatio="xMidYMid meet"
var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)')
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("rango");

//Initiate Legend
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)')
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return color[i];})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;
$('#tabs').tabs()
