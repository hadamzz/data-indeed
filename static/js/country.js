// // // Read the json file from the url to confirm and understand the data architecture // // //

// URL for fetching the data
const link = '/api/country_data';

// Use the d3.json function to read in the data from the url
const dataProm = d3.json(link)

// Print to console to confirm
console.log(dataProm)

// Use "then" method on the promised data (dataProm) to passin a function 
dataProm.then(function(data){
    console.log(data)
    // console.log(Object.keys(data));
    // console.log(Object.values(data));
})


// // // // Create function for plotChart (pie chart) // // //

function plotChart() {
  // Read in the data from the Link
  dataProm.then((data => {

    // Extract data from dictionary for plotting
    var job_count = Object.values(data);
    var country = Object.keys(data);
    
    // Horizontal Bar Chart 
    // 'text' is used to add hovertext
    var trace1 = {
      values: job_count,
      labels: country,    
      name: 'Country',
      type: 'pie',      
      marker: {
        color: '#e377c2',
        line: {color: 'rgb(8,48,107)', width: 1.5}
      }      
    };

    var data = [trace1]
    var layout = {
        title: {text: 'Job Distribution by Country', font: {family: 'Arial Black', size: 24}},    
        height: 600,
        width: 900 
    };  
           
    // Plot the bar chart (@ div with id='bar' in country.html)
    Plotly.newPlot('bar', data, layout);  

  }));    
};

// Call the 'plotChart' function //
plotChart()