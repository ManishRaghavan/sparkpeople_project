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

let close_btn = document.getElementById("bmi_close")
close_btn.onclick = () => {
    BMI_popUp.style.display = "none"
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
        targetWeightData = localStorage.getItem("targetWeight")
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
    getData()   
}


let weight_diff = document.getElementById("weight_diff")
let weight_info = document.getElementById("weight_info")
let month = document.getElementById("target_month").value
let day = document.getElementById("target_day").value
let year = document.getElementById("target_year").value

function getData() {
    targetWeightData = localStorage.getItem("targetWeight")
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

fit_model_close.onclick = () => {
    fit_model.style.display = "none"
}

let pushups = document.getElementById("pushups")
let pushUps_check = document.getElementById("pushUps_check")
let fit_model_btn = document.getElementById("fit_model_btn")
let crunches = document.getElementById("crunches")
let crunches_check = document.getElementById("crunches_check")
let stepTest = document.getElementById("stepTest")
let step_check = document.getElementById("step_check")
// fit_model_btn.addEventListener(onclick, fit_model_show())
// pushups.addEventListener(onload, show())

fit_model_btn.onclick = () => {
    // Checking if pushUps is checked or not 
    if(pushUps_check.checked){
        pushups.style.display = "inline-block"
    } else if(!pushUps_check.checked){
        pushups.style.display = "none"

    }
    // Checking if crunches is checked or not 
    if(crunches_check.checked){
        crunches.style.display = "inline-block"
    } else if(!crunches_check.checked) {
        crunches.style.display = "none"
    }

    // Checking if stepTest is checked or not
    if(step_check.checked) {
        stepTest.style.display = "inline-block"
    } else if(!step_check.checked) {
        stepTest.style.display = "none"
    }
    showFitnessData()
}


// On Window loading checking whether Fitness more tests are added or not
window.onload = () => {
    // Checking if pushUps is checked or not 
    if(pushUps_check.checked){
        pushups.style.display = "block"
    } else {
        pushups.style.display = "none"

    }
    // Checking if crunches is checked or not 
    if(crunches_check.checked){
        crunches.style.display = "block"
    } else if(!crunches_check.checked) {
        crunches.style.display = "none"
    }

    // Checking if stepTest is checked or not
    if(step_check.checked) {
        stepTest.style.display = "block"
    } else if(!step_check.checked) {
        stepTest.style.display = "none"
    }
    
}

// Getting of weight measurements, wellness, fitness, and health measurements.

let your_weight = document.getElementById("head2_weight")
let your_waist = document.getElementById("head2_waist")
let your_hips = document.getElementById("head2_hips")
let your_thighs = document.getElementById("head2_thigh")
let your_upperArm = document.getElementById("head2_upperArm")
let energy_measure = document.getElementById("wellness_energy")
let stress_measure = document.getElementById("wellness_stress")
let mood_measure = document.getElementById("wellness_mood")
let pushup_count = document.getElementById("pushup_count")
let crunches_count = document.getElementById("crunches_count")
let step_count = document.getElementById("step_count")

function storeFitnessData() {
    // console.log("hello")

    if(your_weight.value.trim()){
        let weight_data = localStorage.getItem("weight") 
        weight_data = your_weight.value
        localStorage.setItem("weight", JSON.stringify(weight_data))
    }
    if(your_waist.value.trim()){
        let waist_data = localStorage.getItem("waist") 
        waist_data = your_waist.value
        localStorage.setItem("waist", JSON.stringify(waist_data))
    }
    if(your_hips.value.trim()){
        let hips_data = localStorage.getItem("hips") 
        hips_data = your_hips.value
        localStorage.setItem("hips", JSON.stringify(hips_data))
    }
    if(your_thighs.value.trim()){
        let thighs_data = localStorage.getItem("thighs") 
        thighs_data = your_thighs.value
        localStorage.setItem("thighs", JSON.stringify(thighs_data))
    }
    if(your_upperArm.value.trim()){
        let upperArm_data = localStorage.getItem("Upper_arm") 
        upperArm_data = your_upperArm.value
        localStorage.setItem("Upper_arm", JSON.stringify(upperArm_data))
    }
    if(energy_measure.value.trim()){
        let energy_measure_data = localStorage.getItem("energy_measure") 
        energy_measure_data = energy_measure.value
        localStorage.setItem("energy_measure", JSON.stringify(energy_measure_data))
    }
    if(stress_measure.value.trim()){
        let stress_measure_data = localStorage.getItem("stress_measure") 
        stress_measure_data = stress_measure.value
        localStorage.setItem("stress_measure", JSON.stringify(stress_measure_data))
    }
    if(mood_measure.value.trim()){
        let mood_measure_data = localStorage.getItem("mood_measure") 
        mood_measure_data = mood_measure.value
        localStorage.setItem("mood_measure", JSON.stringify(mood_measure_data))
    }
    if(pushup_count.value.trim()){
        let pushup_count_data = localStorage.getItem("pushup_count") 
        pushup_count_data = pushup_count.value
        localStorage.setItem("pushup_count", JSON.stringify(pushup_count_data))
    }
    if(crunches_count.value.trim()){
        let crunches_count_data = localStorage.getItem("crunches_count") 
        crunches_count_data = crunches_count.value
        localStorage.setItem("crunches_count", JSON.stringify(crunches_count_data))
    }
    if(step_count.value.trim()){
        let step_count_data = localStorage.getItem("step_count") 
        step_count_data = step_count.value
        localStorage.setItem("step_count", JSON.stringify(step_count_data))
    }
    showFitnessData()

    your_weight.value = ""
    your_waist.value = ""
    your_hips.value = ""
    your_thighs.value = ""
    your_upperArm.value = ""
    energy_measure.value = ""
    stress_measure.value = ""
    mood_measure.value = ""
    pushup_count.value = ""
    crunches_count.value = ""
    step_count.value = ""
}

let show_weight = document.getElementById("show_weight")
let show_waist = document.getElementById("show_waist")
let show_hips = document.getElementById("show_hips")
let show_thigh = document.getElementById('show_thigh')
let Show_upperArm = document.getElementById("Show_upperArm")
let show_energy = document.getElementById("show_energy")
let show_stress = document.getElementById("show_stress")
let show_mood = document.getElementById("show_mood")
let show_pushups = document.getElementById("show_pushups")
let show_crunches = document.getElementById("show_crunches")
let show_step = document.getElementById("show_step")

function showFitnessData() {
    let today = new Date().toLocaleDateString()
    let weight_data = JSON.parse(localStorage.getItem("weight"))
    let waist_data = JSON.parse(localStorage.getItem("waist"))
    let hips_data = JSON.parse(localStorage.getItem("hips"))
    let thighs_data = JSON.parse(localStorage.getItem("thighs"))
    let upperArm_data = JSON.parse(localStorage.getItem("Upper_arm"))
    let energy_measure_data = JSON.parse(localStorage.getItem("energy_measure"))
    let stress_measure_data = JSON.parse(localStorage.getItem("stress_measure"))
    let mood_measure_data = JSON.parse(localStorage.getItem("mood_measure"))
    let pushup_count_data = JSON.parse(localStorage.getItem("pushup_count"))
    let crunches_count_data = JSON.parse(localStorage.getItem("crunches_count"))
    let step_count_data = JSON.parse(localStorage.getItem("step_count"))
    show_weight.innerHTML = `${weight_data}`
    show_waist.innerHTML = waist_data
    show_hips.innerHTML = hips_data
    show_thigh.innerHTML = thighs_data
    Show_upperArm.innerHTML = upperArm_data
    show_energy.innerHTML = energy_measure_data
    show_stress.innerHTML = stress_measure_data
    show_mood.innerHTML = mood_measure_data
    show_pushups.innerHTML = pushup_count_data
    show_crunches.innerHTML = crunches_count_data
    show_step.innerHTML = step_count_data

    let targetValue = targetWeightData[targetWeightData.length-1].weight
    console.log(targetValue, weight_data)

    let temp = targetValue - weight_data
    if(temp >= 0){
        weight_diff.innerHTML = `${temp} Kilogram Lost`
    } else if(temp < 0) {
        temp = update - targetValue
        weight_diff.innerHTML = `${temp} Kilogram Gain`
    }
}

showFitnessData()