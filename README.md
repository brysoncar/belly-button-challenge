# belly-button-challenge

Data Visualization Application
This repository contains a JavaScript application for visualizing data from a JSON file using D3.js and Plotly.js libraries. The application fetches data from a remote JSON file and dynamically updates visualizations based on user interactions.

Getting Started
To run the application locally, follow these steps:

Clone this repository to your local machine.
Open the index.html file in a web browser.
Features
Initialization: Upon loading, the application fetches data from a remote JSON file and initializes the page with default visualizations.
Dropdown Menu: Users can select different datasets from a dropdown menu to update visualizations.
Bar Plot: Displays the top 10 OTUs (Operational Taxonomic Units) based on sample values, with OTU IDs on the y-axis and sample values on the x-axis.
Demographic Information: Shows demographic information for the selected dataset.
Bubble Chart: Presents data in a bubble chart format, where each bubble represents an OTU. Bubble size corresponds to sample values, and color represents OTU IDs.
Dynamic Updates: Visualizations are dynamically updated when users select different datasets from the dropdown menu.
Code Overview
Initialization: The init() function fetches JSON data using D3.js, populates the dropdown menu, and initializes visualizations.
Event Handling: An event listener is added to the dropdown menu to detect changes and update visualizations accordingly.
Bar Plot: The drawBarPlot() function generates the bar plot visualization using Plotly.js, based on the selected dataset.
Demographic Information: The showDemographics() function displays demographic information for the selected dataset.
Bubble Chart: The drawBubbleChart() function creates the bubble chart visualization using Plotly.js, based on the selected dataset.
Dependencies
D3.js: A JavaScript library for manipulating documents based on data.
Plotly.js: A JavaScript graphing library for creating interactive charts.
Data Source
The application fetches data from a remote JSON file hosted at the following URL:

Sample JSON Data
License
This project is licensed under the MIT License - see the LICENSE file for details.