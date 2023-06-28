document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Resto del código
  });

function validate(){

    //inputs
    var dayInput    = document.getElementById("day");
    var day         = dayInput.value;
    var monthInput  = document.getElementById("month");
    var month       = monthInput.value;
    var yearInput   = document.getElementById("year");
    var year        = yearInput.value;
    var i           = 0;
   
    if (document.getElementById("error0").textContent= '--'){
       if (day === ''){
           dayInput.style.border = '1px solid rgb(233, 131, 131)',
           dayInput.style.color = 'rgb(233, 131, 131)';        
           document.getElementById("error0").style.display= 'inline'
           document.getElementById("error0").textContent= 'This field is required',
           document.getElementById("e0").style.color="rgb(222, 127, 127)";
        
        }else if (day > 31 || day <1){
           dayInput.style.border = '1px solid rgb(233, 131, 131)',
           dayInput.style.color = 'rgb(233, 131, 131)';     
           document.getElementById("error0").style.display= 'inline'
           document.getElementById("error0").textContent= 'Must Be a valid Day',
           document.getElementById("e0").style.color="rgb(222, 127, 127)"; 
        }
       
        if (month === ''){
           monthInput.style.border = '1px solid rgb(233, 131, 131)',
           monthInput .style.color = 'rgb(233, 131, 131)';    
           document.getElementById("error1").textContent= 'This field is required',
           document.getElementById("error1").style.display= 'inline',
           document.getElementById("e1").style.color="rgb(222, 127, 127)";
        }else if (month > 12 || month <1){
           monthInput.style.border = '1px solid rgb(233, 131, 131)',
           monthInput .style.color = 'rgb(233, 131, 131)';    
           document.getElementById("error1").textContent= 'Must Be a valid Month',
           document.getElementById("error1").style.display= 'inline',
           document.getElementById("e1").style.color="rgb(222, 127, 127)";
        } 
       
        if ( year === ''){
           yearInput.style.border = '1px solid rgb(233, 131, 131)',
           yearInput .style.color = 'rgb(233, 131, 131)',
           document.getElementById("error2").style.display= 'inline',
           document.getElementById("error2").textContent= 'This field is required',
           document.getElementById("e2").style.color="rgb(222, 127, 127)";
        }else if (year >= 2015 || year <1){
           yearInput.style.border = '1px solid rgb(233, 131, 131)',
           yearInput .style.color = 'rgb(233, 131, 131)',
           document.getElementById("error2").style.display= 'inline',
           document.getElementById("error2").textContent= 'Must Be a valid Year',
           document.getElementById("e2").style.color="rgb(222, 127, 127)";
        }  
        else if ( month === '' ||  year === '' || day === ''){

                    console.log("ta mal")
        } else {
            const currentDate = new Date();

            // Crear objeto de fecha de nacimiento
            const birthDate = new Date(year, month - 1, day); // Restamos 1 al mes ya que los meses en JavaScript se representan del 0 al 11
            
            // Calcular la diferencia de tiempo en milisegundos
            const timeDiff = currentDate.getTime() - birthDate.getTime();
            
            // Convertir la diferencia de tiempo a una edad en años, meses y días
            const ageDate = new Date(timeDiff); // Utilizamos la diferencia de tiempo como referencia para crear una nueva fecha
            const years = ageDate.getUTCFullYear() - 1970; // Restamos 1970 ya que la referencia para los años en JavaScript es el año 1970
            const months = ageDate.getUTCMonth();
            const days = ageDate.getUTCDate();
            document.getElementById("error2").textContent= '<br>',
            document.getElementById("YY").textContent= years,
            document.getElementById("MM").textContent= months,
            document.getElementById("DD").textContent= days,
            console.log(`La edad es ${years} años, ${months} meses y ${days} días.`);
            
        }

    } 
}
