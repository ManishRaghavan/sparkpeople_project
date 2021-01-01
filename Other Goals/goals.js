let day1 = document.getElementById("report_day1")
let day2 = document.getElementById("report_day2")
let day3 = document.getElementById("report_day3")
let day4 = document.getElementById("report_day4")
let day5 = document.getElementById("report_day5")
let day6 = document.getElementById("report_day6")
let day7 = document.getElementById("report_day7")

let model = document.getElementById("goals_model")
let close = document.getElementById("model_close")
// let sleepHrs = document.getElementById("goal_sleep")
console.log(model)

let showGoals_model = (event) => {
    console.log(event.id)
    // let x = event.id
    model.style.display = "block"
    // return x
}

window.onclick = function(event) {
    if (event.target == model) {
        model.style.display = "none";
    }
}

function closeGoals_model() {
    // console.log("hello")
    model.style.display = "none"
}

let sleephrs_show = document.getElementById("sleephrs_show")
let sleephrs_img = document.getElementById("sleephrs_img")
let goal_sleep = document.getElementById("goal_sleep")


let saveGoals_model = () => {
    // console.log(showGoals_model(x))
    sleephrs_img.style.display = "none"
    sleephrs_show.style.display = "block"
    sleephrs_show.innerHTML = goal_sleep.value
}

// This is related to fast break goals model

let fastBreak_model = document.getElementById("fastBreak_model")

function fastBreak_close() {
    fastBreak_model.style.display = "none"
}

function showFastBreak_model() {
    fastBreak_model.style.display = "block"
}


// Fast break goals display

let fastbreak_goals_static = document.getElementById('fastbreak_goals_static')
let healthy_food_header = document.getElementById('healthy_food_header')
let healthy_food = document.getElementById("healthy_food")
let walk_day = document.getElementById("walk_day")

let healthy_food_check = document.getElementById("healthy_food_check") 
let walk_check = document.getElementById("walk_check")

let display_fastFood = () => {
    console.log(healthy_food_check.checked, walk_check.checked)
    if(healthy_food_check.checked && walk_check.checked){
        console.log("both")
        fastbreak_goals_static.style.display = "none"
        healthy_food_header.style.display = "flex"
        healthy_food.style.display = "flex"
        walk_day.style.display = "flex"
    } else if(healthy_food_check.checked) {
        console.log("health")
        fastbreak_goals_static.style.display = "none"
        healthy_food_header.style.display = "flex"
        healthy_food.style.display = "flex"
        walk_day.style.display = "none"
    } else if(walk_check.checked) {
        console.log("walk")
        fastbreak_goals_static.style.display = "none"
        healthy_food_header.style.display = "flex"
        walk_day.style.display = "flex"
        healthy_food.style.display = "none"
    } else{
        console.log("none")
        fastbreak_goals_static.style.display = "flex"
        healthy_food_header.style.display = "none"
        walk_day.style.display = "none"
        healthy_food.style.display = "none"
    }
}