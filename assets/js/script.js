document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Resto del código
  });
/*
function getYearSs(event) {
    event.preventDefault();

    //inputs
    var dayInput    = document.getElementById("day");
    var day         = dayInput.value;
    var monthInput  = document.getElementById("month");
    var month       = monthInput.value;
    var yearInput   = document.getElementById("year");
    var year        = yearInput.value;
    //outputs
    var DD = document.getElementById("DD").value;
    var MM = document.getElementById("MM").value;
    var YY = document.getElementById("YY").value;
    if (day=== ""  || month === "" || year === ""){



    } else {
     
    }

}

function getYears(event) {
    event.preventDefault();

    dayInput=document.getElementById("day");
    day= dayInput.value;
    monthInput=document.getElementById("month");
    month= monthInput.value;
    yearInput=document.getElementById("year");
    year= yearInput.value;

    if (day >= "32" || year >= "2015" || month >= "13") {
        if (dayInput.value > day){
            day = day + months
        }
    }else if (day === "" || year === "" || month === "") {
        dayInput.style.border = '',
        dayInput.style.color = 'rgb(233, 131, 131)';
        monthInput.style.border = '1px solid rgb(233, 131, 131)',
        monthInput .style.color = 'rgb(233, 131, 131)';
        yearInput.style.border = '1px solid rgb(233, 131, 131)',
        yearInput .style.color = 'rgb(233, 131, 131)',
        document.getElementById("error0").style.display= 'inline',
        document.getElementById("error1").style.display= 'inline',
        document.getElementById("error2").style.display= 'inline',
        document.getElementById("error0").textContent= 'This field is required',
        document.getElementById("error1").textContent= 'This field is required',
        document.getElementById("error2").textContent= 'This field is required',
        document.getElementById("e0").style.color="rgb(222, 127, 127)";
        document.getElementById("e1").style.color="rgb(222, 127, 127)";
        document.getElementById("e2").style.color="rgb(222, 127, 127)";
    }else {
            if (validate()) {
              if (dayInp.value > day) {
                day = day + months[month - 1];
                month = month - 1;
              }
              if (monthInp.value > month) {
                month = month + 12;
                year = year - 1;
              }
          
              const d = day - dayInp.value;
              const m = month - monthInp.value;
              const y = year - yearInp.value;
          
              DD.innerHTML = d;
              MM.innerHTML = m;
              YY.innerHTML = y;
            }
          
    } 
}

function validar(){
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor= "1px solid rgb(233, 131, 131)";
            parent.querySelector("small").innerText = "this field is required.";
            validator = false;
        } else if (monthInput.value > 12) {
            monthInput.style.borderColor= "1px solid rgb(233, 131, 131)";
            monthInput.parentElement.querySelector("small").innerText= "must be a valid month.";
            validator = false;
        } else if (dayInput.value > 31) {
            dayInput.style.borderColor="1px solid rgb(233, 131, 131)";
            dayInput.parentElement.querySelector("small").innerText= "must be a valid day.";
            validator = false;
        } else {
            i.style.borderColor = "black";
            parent.querySelector("small").innertText = "";
            validator = false;
        }
    });
    return validator;
}




  
const form = document.querySelector("form");
form.addEventListener('submit', getYears);

*/


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
        
        }else if (day > 31){
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
        }else if (month > 12){
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
        }else if (year >= 2015){
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
