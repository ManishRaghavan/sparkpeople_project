let BMI_btn = document.getElementById("bmi_popUp")
let BMI_popUp = document.getElementById("bmiModel")
let bmi_weight = document.getElementById("bmi_weight")
let bmi_height = document.getElementById("bmi_height")
let bmi_calculate = document.getElementById("cal_bmi")
let bmi_value = document.getElementById("bmi_value")
let bmi_show = document.getElementById("bmi_you")
let current_weight = document.getElementById("current_weight")
let save = document.getElementById("bmi_save")
let update 

// console.log(bmi_show)
bmi_calculate.onclick = () => {
    // console.log(bmi_weight.value, bmi_height.value)
    BMI = (bmi_weight.value * 100 * 100)/(bmi_height.value * bmi_height.value)
    console.log(BMI)
    bmi_value.innerHTML = Math.floor(BMI)
    if(BMI < 18.5 && BMI > 0){
        bmi_show.style.marginLeft = "150px"
    }
    else if(BMI > 18 && BMI < 25){
        bmi_show.style.marginLeft = "250px"
    }
    else if(BMI > 25 && BMI < 30){
        bmi_show.style.marginLeft = "300px"
    }
    else if(BMI > 30){
        bmi_show.style.marginLeft = "400px"
    }
    console.log(bmi_weight.value)
    if(bmi_weight.value){
        let task = localStorage.getItem("currentWeight")
        if(task == null) {
            currentWeight = []
        } else {
            currentWeight = JSON.parse(task)
        }
        currentWeight.push({weight: bmi_weight.value})
        console.log(currentWeight)
        localStorage.setItem("currentWeight", JSON.stringify(currentWeight));
    }
    bmi_weight.value =""
    bmi_height.value = ''
    showTask()
}

BMI_btn.onclick = () => {
    // console.log(model)
    BMI_popUp.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == BMI_popUp) {
        BMI_popUp.style.display = "none";
    }
}

// Getting Current Weight from Local Storage

function showTask() {
    var currentWeight
    let task = localStorage.getItem("currentWeight")
    if(task == null){
        currentWeight = []
    }
    else {
        currentWeight = JSON.parse(task)
    }
    currentWeight.forEach((item) => update = item.weight)
    // update = currentWeight[currentWeight.length-1]
    console.log(update)
    current_weight.innerHTML = update
}
showTask()

//Getting Req'd variables
let last_weight = document.getElementById("last_weight")
let target_weight = document.getElementById("target_weight")
let target_year = document.getElementById("target_year")
let target_day = document.getElementById("target_day")
let target_month = document.getElementById("target_month")
let targetWeightData
// Displaying Data on my weights page.
save.onclick = () => {
    let myWeights_data = localStorage.getItem("currentWeight")
    if(myWeights_data == null){
        // console.log('he')
        currentWeight = []
    } else {
        // console.log('ll')
        currentWeight = JSON.parse(myWeights_data)
    }
    for(let i=0; i<currentWeight.length-1; i++){
        console.log(currentWeight[i])
        last_weight.innerHTML = currentWeight[i].weight
    }

    let target_weight_value = target_weight.value;
    if(target_weight_value.trim()){
        var targetWeightData = localStorage.getItem("targetWeight")
        if(targetWeightData == null){
            targetWeightData = []
        } else {
            targetWeightData = JSON.parse(targetWeightData)
        }
        localStorage.setItem("day", JSON.stringify(target_day.value))
        localStorage.setItem("month", JSON.stringify(target_month.value))
        localStorage.setItem("year", JSON.stringify(target_year.value))
    }


    targetWeightData.push({weight:target_weight_value})
    localStorage.setItem("targetWeight", JSON.stringify(targetWeightData))
    target_weight.value = ""     
}


let weight_diff = document.getElementById("weight_diff")
let weight_info = document.getElementById("weight_info")
let month = document.getElementById("target_month").value
let day = document.getElementById("target_day").value
let year = document.getElementById("target_year").value

function getData() {
    var targetWeightData = localStorage.getItem("targetWeight")
    if(targetWeightData == null){
        targetWeightData = []
    } else {
        targetWeightData = JSON.parse(targetWeightData)
    }
    let html = "";
    console.log(targetWeightData, update)
    
    let day = JSON.parse(localStorage.getItem("day"))
    let year = JSON.parse(localStorage.getItem("year"))
    let month = JSON.parse(localStorage.getItem("month"))
    console.log(day, year, month)
    targetWeightData.forEach( (item) => {
        html = `Goal to go from ${update} to ${item.weight} by ${month}/${day}/${year}, Last weigh-in`
    })
    weight_info.innerHTML = html


    // let targetValue = targetWeightData[targetWeightData.length-1].weight
    // console.log(targetValue, update)
    // let temp = targetValue - update
    // if(temp >= 0){
    //     weight_diff.innerHTML = temp
    // } else if(temp < 0) {
    //     temp = update - targetValue
    //     weight_diff.innerHTML = `${temp} Pounds Gain`
    // }

}

getData()

// Fitness Model Pop-Up 
let fit_model = document.getElementById("Fitness_model")
// let fit_btn = document.getElementById("fit_more")
// let health_btn = document.getElementById("health_more")

function addon_measurements() {
    fit_model.style.display = "block"
}

window.onclick = function(event) {
    if (event.target == fit_model) {
        fit_model.style.display = "none";
    }
}

let pushups = document.getElementById("pushups")
let pushUps_check = document.getElementById("pushUps_check").checked

pushups.addEventListener(onload, show())
function show() {
    if(pushUps_check){
        pushups.style.display = "block"
    } else {
        pushups.style.display = "none"
    }
}