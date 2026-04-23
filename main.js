function theCheck() {
     let degree = Number(document.getElementById('degree').value);
     let humidity = Number(document.getElementById('humidity').value);

     let HeatIndex = degree + (0.33 * humidity) - 4;

     // Input degree and humidity and HeatIndex will be calculated
     switch (true) {
          case (HeatIndex <= 27):
               window.alert("Heat Index: " + HeatIndex + "\nStatus: Comfortable/Cool");
               break;

          case (HeatIndex >= 28 && HeatIndex <= 32):
               window.alert("Heat Index: " + HeatIndex + "\nStatus: Warm");
               break;

          case (HeatIndex >= 33 && HeatIndex <= 37):
               window.alert("Heat Index: " + HeatIndex + "\nStatus: Hot");
               break;

          case (HeatIndex >= 38 && HeatIndex <= 41):
               window.alert("Heat Index: " + HeatIndex + "\nStatus: Very Hot/Caution");
               break;

          case (HeatIndex >= 42):
               window.alert("Heat Index: " + HeatIndex + "\nStatus: Extreme Heat/Danger");
               break;
     }
}