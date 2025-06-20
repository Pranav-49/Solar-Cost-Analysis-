
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitbutton").addEventListener("click", function(event) {
        event.preventDefault();
        
        // Get the position of the submit button
        var submitButtonPosition = document.getElementById("submitbutton").getBoundingClientRect().top;

        // Calculate the current scroll position
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        // Calculate the target scroll position
        var targetScrollPosition = scrollPosition + submitButtonPosition;

        // Smoothly scroll to the target position
        smoothScrollTo(targetScrollPosition, 1000); // Adjust the duration as needed
        var unitValue = document.getElementById("unit").value;

        unitValue = unitValue/120;
        var requirment = unitValue.toFixed(1);
        var temp = requirment % 1;
        if(temp <= 0.5 && temp >= 0){
            requirment = Math.floor(requirment);
            requirment += 0.5;
        }
        else if(temp > 0.5 && temp <= 0.9){
            requirment = Math.floor(requirment);
            requirment += 1;
        }
        
        unitValue = requirment* 120;
        
        var batteries = document.querySelector('input[name="batteries"]:checked').value;
        var phase = document.querySelector('input[name="system"]:checked').value;
        var userType = document.getElementById('userType').value;
        
        var billValue = 0;
        if(userType === "individual" || userType === "group" || userType === "agricultural"){
            if(unit <= 100 && unit >= 0){
                billValue = 4.41;
            }
            else if(unit <= 300 && unit > 100){
                billValue = 9.64;
            }
            else if(unit <= 500 && unit > 300){
                billValue = 13.61;
            }
            else{
                billValue = 15.57;
            }
        }
        else if(userType === "commertial"){
            if(unit <= 20 && unit >= 0){
                billValue = 8.27;
            }
            else if(unit <= 50 && unit > 20){
                billValue = 10.79;
            }
            else{
                billValue = 12.76;
            }
        }
        else if(userType === "industrial"){
            billValue = 8.12;
        }
        else if(userType === "public"){
            billValue = 5.23;
        }

        billValue *= unitValue;
        
        if(billValue < 116 && phase === "single"){
            billValue = 116;
        }
        else if(billValue < 385 && phase === "three"){
            billValue = 385;
        }

        var other = 0;

        if(userType === "commertial" || userType === "industrial" || userType === "agricultural" || userType === "public"){
            other = 1;
        }
        if(other){
            alert("You are not an resedential user. So you will NOT get any subsidy !")
            var span = document.getElementById("span4");
                span.innerHTML = "Not Applicable !";
                total4 = 0;
        }
        else if(batteries === "yes"){
            alert("You will NOT get any subsidy as you are using Off-Grid Solar System !")
            var span = document.getElementById("span4");
                span.innerHTML = "Not Applicable !";
                total4 = 0;
        }

        var total4 = unitValue/120;
        if(userType === "individual" && batteries === "no"){
            if(total4 >= 0 && total4 < 1){
                var span = document.getElementById("span4");
                span.innerHTML = "Minimum 1Kw/h require for individual housing !";
                total4 = 0;
            }
            else if(total4 >= 1 && total4 < 2){
                var span = document.getElementById("span4");
                span.innerHTML = (" ₹  " + 18000);
                total4 = 18000;
            }
            else if(total4 >= 2 && total4 < 3){
                var span = document.getElementById("span4");
                span.innerHTML = (" ₹  " + 36000);
                total4 = 36000;
            }
            else if(total4 >= 3 && total4 < 4){
                var span = document.getElementById("span4");
                span.innerHTML = (" ₹  " + 54000);
                total4 = 54000;
            }
            else if(total4 >= 4 && total4 < 5){
                var span = document.getElementById("span4");
                span.innerHTML = (" ₹  " + 63000);
                total4 = 63000;
                
            }
            else if(total4 >= 5 && total4 < 6){
                var span = document.getElementById("span4");
                span.innerHTML =  (" ₹  " + 72000);
                total4 = 72000;
            }
            else if(total4 >= 6 && total4 < 7){
                var span = document.getElementById("span4");
                span.innerHTML = (" ₹  " + 81000);
                total4 = 81000;
            }
            else if(total4 >= 7 && total4 < 8){
                var span = document.getElementById("span4");
                span.innerHTML = (" ₹  " + 90000);
                total4 = 90000;
            }
            else if(total4 >= 8 && total4 < 9){
                var span = document.getElementById("span4");
                span.innerHTML = (" ₹  " + 99000);
                total4 = 99000;
            }
            else if(total4 >= 9 && total4 < 10){
                var span = document.getElementById("span4");
                span.innerHTML = (" ₹  " + 108000);
                total4 = 108000;
            }
            else if(total4 >= 10){
                var span = document.getElementById("span4");
                span.innerHTML = "Fixed Rate : 117000";
                total4 = (" ₹  " + 117000);
            }
        }

        if(userType === "group" && batteries === "no"){
            if(total4 >= 0 && total4 < 100){
                var span = document.getElementById("span4");
                span.innerHTML = "Minimum 100Kw/h require for group housing !";
                total4 = 0;
            }
            else if(total4 >= 100 && total4 < 200){
                var span = document.getElementById("span4");
                span.innerHTML = (" ₹  " + 900000);
                total4 = 900000;
            }
            else if(total4 >= 200 && total4 < 300){
                var span = document.getElementById("span4");
                span.innerHTML = (" ₹  " + 1800000);
                total4 = 1800000;
            }
            else if(total4 >= 300 && total4 < 400){
                var span = document.getElementById("span4");
                span.innerHTML = (" ₹  " + 2700000);
                total4 = 2700000;
            }
            else if(total4 >= 400 && total4 < 500){
                var span = document.getElementById("span4");
                span.innerHTML = (" ₹  " + 3600000);
                total4 = 3600000;
            }
            else if(total4 >= 500){
                var span = document.getElementById("span4");
                span.innerHTML = (" ₹  " + 4500000);
                total4 = 4500000;
            }
        }


        const to_year = 12;
        var total1 = 0;
        var total2 = 0;
        
        var bill_plus = [];
        var bill_minus = [];

        var table = document.getElementById("table");
        total2 = unitValue * (90000/120);
        if(batteries === "yes"){
            total2 = total2 + (unitValue * (35000/120));
        }
        var temp1 = total2;
        var temp2 = 0;
        for (var i = 1; i <= 25; i++) {
            total1 = total1 + to_year * billValue;
            table.rows[i].cells[1].innerHTML = Math.round(total1);
            bill_plus.push(Math.round(total1));
        }
        for(var i = 0; i < 25; i++){
            table.rows[i+1].cells[2].innerHTML = Math.round(total2);

            bill_minus.push(Math.round(total2));
            temp2 = total2;
            
            if((i+1) % 3 == 0){
                if(batteries === "yes"){
                    total2 = total2 + (unitValue * (25000/120));
                }
            }
            total2 = total2 + (unitValue * (1000/120));
        }
        var time = 0;
        for (var i = 0; i < 25; i++) {
            if(bill_plus[i] > bill_minus[i]){
                time = i+1;
                break;
            }
        }
        if(time != 0){
            var span = document.getElementById("span5");
            span.innerHTML = (time + " Years");
            time = 0;
        }
        else{
            var span = document.getElementById("span5");
            span.innerHTML = "System in loss";
        }
            
        var span = document.getElementById("span1");
        span.innerHTML = (" ₹ " + Math.round(total1 - temp2));

        span = document.getElementById("span2");
        span.innerHTML = (" ₹ " + Math.round(temp1));
        
        var span = document.getElementById("span3");
        span.innerHTML = (requirment + " KWh Nearly");

        let areaPerPanel = 1.5; // in square meters
        let efficiency = 0.15; // 15%


    // Get the required kW system size from the requirement variable
    let systemSizeKw = requirment;

    // Calculate the total power needed (in watts)
    let totalPowerNeeded = systemSizeKw * 1000; // Convert kW to watts
    console.log(totalPowerNeeded)
    var span = document.getElementById("totalAreaOutput");
        span.innerHTML = (totalPowerNeeded);


    // Calculate the number of panels needed
    let numberOfPanels = Math.ceil(totalPowerNeeded / (areaPerPanel * efficiency * 1000));
    console.log(numberOfPanels)
    var span = document.getElementById("numberofpanels");
    span.innerHTML = (numberOfPanels);

    



    // Calculate the total area required (in square meters)
    let totalAreaRequired = numberOfPanels * areaPerPanel;

    // Display the results
    document.getElementById("totalAreaOutput").innerText =  totalAreaRequired.toFixed(2) +  " Sq.m ";



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
  drawPieChart();
  drawLineChart();
}

function drawPieChart() {
  var data = google.visualization.arrayToDataTable([
    ['Expence', 'Amount'],
    ['Investment', bill_minus[0]],
    ['Subsidy', total4],
  ]);
  console.log(total4)

  var options = {
    title: 'First Investment'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

function drawLineChart() {
  var data = google.visualization.arrayToDataTable([
['Year', 'Solar Cost', 'Electricity Bill'],
['00', bill_minus[0], 0],
['01', bill_minus[0], bill_plus[0]],
    ['02', bill_minus[1], bill_plus[1]],
    ['03', bill_minus[2], bill_plus[2]],
    ['04', bill_minus[3], bill_plus[3]],
    ['05', bill_minus[4], bill_plus[4]],
    ['06', bill_minus[5], bill_plus[5]],
    ['07', bill_minus[6], bill_plus[6]],
    ['08', bill_minus[7], bill_plus[7]],
    ['09', bill_minus[8], bill_plus[8]],
    ['10', bill_minus[9], bill_plus[9]],
    ['11', bill_minus[10], bill_plus[10]],
    ['12', bill_minus[11], bill_plus[11]],
    ['13', bill_minus[12], bill_plus[12]],
    ['14', bill_minus[13], bill_plus[13]],
    ['15', bill_minus[14], bill_plus[14]],
    ['16', bill_minus[15], bill_plus[15]],
    ['17', bill_minus[16], bill_plus[16]],
    ['18', bill_minus[17], bill_plus[17]],
    ['19', bill_minus[18], bill_plus[18]],
    ['20', bill_minus[19], bill_plus[19]],
    ['21', bill_minus[20], bill_plus[20]],
    ['22', bill_minus[21], bill_plus[21]],
    ['23', bill_minus[22], bill_plus[22]],
    ['24', bill_minus[23], bill_plus[23]],
    ['25', bill_minus[24], bill_plus[24]],
]);

  var options = {
    title: 'Investments and Returns',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

        // Unhide elements with class "hide"
        var hiddenElements = document.querySelectorAll(".hide");
        hiddenElements.forEach(function(element) {
            element.classList.remove("hide");
        });

        total1 = 0, total2 = 0, total3 = 0, time = 0, totalPowerNeeded = 0, numberOfPanels=0;

    });
});




document.addEventListener('DOMContentLoaded', () => {
    const exportBtn = document.getElementById('exportBtn');

    // Event listener for export button
    exportBtn.addEventListener('click', () => {
        exportToExcel();
    });

    // Function to export data to Excel
    function exportToExcel() {
        // Extract table data
        const table = document.getElementById('table');
        const tableRows = table.querySelectorAll('tr');
        const tableData = [];

        // Extract headers from thead
        const headersRow = tableRows[0];
        const headersData = Array.from(headersRow.querySelectorAll('th')).map(th => th.textContent.trim());
        tableData.push(headersData);

        // Extract table rows
        for (let i = 1; i < tableRows.length; i++) {
            const rowData = Array.from(tableRows[i].querySelectorAll('td')).map(td => td.textContent.trim());
            tableData.push(rowData);
        }

        // Extract variables
        const variables = [
            ['Total savings lifetime ( ₹ )', document.getElementById('span1').textContent],
            ['Initial cost accordingly ( ₹ )', document.getElementById('span2').textContent],
            ['Requirement of Panel (KW/hr)', document.getElementById('span3').textContent],
            ['Return time on investment(years)', document.getElementById('span5').textContent],
            ['You will get subsidy upto', document.getElementById('span4').textContent],
            ['Number of panels required',document.getElementById('numberOfPanels').textContent],
            ['Area required for the system',document.getElementById('totalAreaOutput').textContent]
        ];

        // Merge table data and variables
        const mergedData = [...tableData, [], ...variables];

        // Create a new Excel workbook
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(mergedData);

        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(wb, ws, 'Data');

        // Save the workbook to a file
        XLSX.writeFile(wb, 'data.xlsx');
    }
});

// Function to smoothly scroll to a target position
function smoothScrollTo(targetPosition, duration) {
    var startPosition = window.pageYOffset || document.documentElement.scrollTop;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var ease = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, ease);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

