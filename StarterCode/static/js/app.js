// Define the URL for the JSON file
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Function to initialize the page
function init() {
    // Use D3 to fetch the JSON data from the URL
    d3.json(url).then(function(data) {
        // Once the data is loaded, you can work with it here
        console.log(data);

        // Assign the variables with names and metadata 
        let names = data.names;

        // Populate the dropdown menu with options
        d3.select("#selDataset")
          .selectAll("option")
          .data(names)
          .enter()
          .append("option")
          .attr("value", d => d)
          .text(d => d);

        // Get the selected dataset and update the charts
        let selectedId = names[0];
        updateCharts(selectedId);
    });

    // Event listener for dropdown change
    d3.select("#selDataset").on("change", function() {
        // Get the selected dataset and update the charts
        let selectedId = d3.select(this).property("value");
        updateCharts(selectedId);
    });
}

// Function to update the charts
function updateCharts(selectedId) {
    drawBarPlot(selectedId);
    showDemographics(selectedId);
    drawBubbleChart(selectedId);
}

// Function to plot the bar plot
function drawBarPlot(selectedId) {
    d3.json(url).then(function(data) {
        let sample = data.samples.find(sample => sample.id === selectedId);
        let trace = {
            x: sample.sample_values.slice(0, 10).reverse(),
            y: sample.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
            text: sample.otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h"
        };
        let layout = {
            title: "Top 10 OTUs",
            xaxis: { title: "Sample Values" },
            yaxis: { title: "OTU ID" }
        };
        Plotly.newPlot("bar", [trace], layout);
    });
}


// Funciton to display demographic information
function showDemographics(selectedId){
    d3.json(url).then(function(data){
        metaData = data.metadata;

        let selectedMetadata = metaData.filter(values => values.id == selectedId);

        d3.select("#sample-metadata").html("");

        Object.entries(selectedMetadata[0]).forEach(([k,v]) => {

            // Log the individual key/value pairs as they are being appended to the metadata panel
            console.log(k,v);

            d3.select("#sample-metadata").append("h5").text(`${k}: ${v}`);
        });

    })

}

// Function to plot the bubble chart
function drawBubbleChart(selectedId) {
    d3.json(url).then(function(data) {
        let sample = data.samples.find(sample => sample.id === selectedId);
        let trace = {
            x: sample.otu_ids,
            y: sample.sample_values,
            mode: "markers",
            marker: {
                size: sample.sample_values,
                color: sample.otu_ids,
                colorscale: "Earth"
            },
            text: sample.otu_labels
        };
        let layout = {
            title: "OTU Bubble Chart",
            xaxis: { title: "OTU ID" },
            yaxis: { title: "Sample Values" }
        };
        Plotly.newPlot("bubble", [trace], layout);
    });
}

// Call the init function to initialize the page
init();
