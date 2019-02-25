var timeElement = document.getElementById("datetime");

var dateTimeValue = new Date();

timeElement.innerText = "Ingresaste el " + dateTimeValue.toLocaleDateString() + 
                        " a las "+ dateTimeValue.toLocaleTimeString();