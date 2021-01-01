var padding = { top: 20, right: 40, bottom: 0, left: 0 },
    w = 500 - padding.left - padding.right,
    h = 500 - padding.top - padding.bottom,
    r = Math.min(w, h) / 2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.scale.category20();



var data = [
    { "label": "Sparkpoints 1", "value": 1, "question": "You got 1 Sparkpoints" },
    { "label": "Sparkpoints 2", "value": 2, "question": "You got 2 Sparkpoints" },
    { "label": "Sparkpoints 3", "value": 3, "question": "You got 3 Sparkpoints" },
    { "label": "Sparkpoints 4", "value": 4, "question": " You got 4 Sparkpoints" },
    { "label": "Sparkpoints 5", "value": 5, "question": "You got 5 Sparkpoints" },
    { "label": "Sparkpoints 6", "value": 6, "question": "You got 6 Sparkpoints" },
    { "label": "Sparkpoints 7", "value": 7, "question": "You got 7 Sparkpoints" },
    { "label": "Sparkpoints 8", "value": 8, "question": "You got 8 Sparkpoints" },
    { "label": "Sparkpoints 9", "value": 9, "question": "You got 9 Sparkpoints" },
    { "label": "Sparkpoints 10", "value": 10, "question": "You got 10 Sparkpoints" },
    { "label": "Sparkpoints 11", "value": 11, "question": "You got 11 Sparkpoints" },
    { "label": "Sparkpoints 12", "value": 12, "question": "You got 12 Sparkpoints" },
    { "label": "Sparkpoints 13", "value": 13, "question": "You got 13 Sparkpoints" },
    { "label": "Sparkpoints 14", "value": 14, "question": "You got 14 Sparkpoints" },
    { "label": "Sparkpoints 15", "value": 15, "question": "You got 15 Sparkpoints" },
    { "label": "Sparkpoints 16", "value": 16, "question": "You got 16 Sparkpoints" },
    { "label": "Sparkpoints 17", "value": 17, "question": "You got 17  Sparkpoints" },
    { "label": "Sparkpoints 18", "value": 18, "question": "You got 18 Sparkpoints" },
    { "label": "Sparkpoints 19", "value": 19, "question": "You got 19 Sparkpoints" },
    { "label": "Sparkpoints 20", "value": 20, "question": "You got 20 Sparkpoints" },
    { "label": "Sparkpoints 21", "value": 21, "question": "You got 21 Sparkpoints" },
    { "label": "Sparkpoints 22", "value": 22, "question": "You got 22 Sparkpoints" },
    { "label": "Sparkpoints 23", "value": 23, "question": "You got 23 Sparkpoints" },
    { "label": "Sparkpoints 24", "value": 24, "question": "You got 24 Sparkpoints" },
    { "label": "Sparkpoints 25", "value": 25, "question": "You got 25 Sparkpoints" },
    { "label": "Sparkpoints 26", "value": 26, "question": "You got 26 Sparkpoints" },
    { "label": "Sparkpoints 27", "value": 27, "question": "You got 27 Sparkpoints" },
    { "label": "Sparkpoints 28", "value": 28, "question": "You got 28 Sparkpoints" },
    { "label": "Sparkpoints 29", "value": 29, "question": "You got 29 Sparkpoints" },
    { "label": "Sparkpoints 30", "value": 30, "question": "You got 30 Sparkpoints" }
];


var svg = d3.select('#chart')
    .append("svg")
    .data([data])
    .attr("width", w + padding.left + padding.right)
    .attr("height", h + padding.top + padding.bottom);

var container = svg.append("g")
    .attr("class", "chartholder")
    .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");

var vis = container
    .append("g");

var pie = d3.layout.pie().sort(null).value(function (d) { return 1; });

// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice")
    .data(pie)
    .enter()
    .append("g")
    .attr("class", "slice");


arcs.append("path")
    .attr("fill", function (d, i) { return color(i); })
    .attr("d", function (d) { return arc(d); });

// add the text
arcs.append("text").attr("transform", function (d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle) / 2;
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
})
    .attr("text-anchor", "end")
    .text(function (d, i) {
        return data[i].label;
    });

container.on("click", spin);


function spin(d) {

    container.on("click", null);

    //all slices have been seen, all done
    if (oldpick.length == data.length) {
        console.log("done");
        container.on("click", null);
        return;
    }

    var ps = 360 / data.length,
        pieslice = Math.round(1440 / data.length),
        rng = Math.floor((Math.random() * 1440) + 360);

    rotation = (Math.round(rng / ps) * ps);

    picked = Math.round(data.length - (rotation % 360) / ps);
    picked = picked >= data.length ? (picked % data.length) : picked;


    if (oldpick.indexOf(picked) !== -1) {
        d3.select(this).call(spin);
        return;
    } else {
        oldpick.push(picked);
    }

    rotation += 90 - Math.round(ps / 2);

    vis.transition()
        .duration(3000)
        .attrTween("transform", rotTween)
        .each("end", function () {

            //mark question as seen
            d3.select(".slice:nth-child(" + (picked + 1) + ") path")


            //populate question
            d3.select("#question h1")
                .text(data[picked].question);

            oldrotation = rotation;

            container.on("click", spin);

            let a = data[picked].value
            localStorage.setItem("sparkpoints", JSON.stringify(a))

            
    let spark  = localStorage.getItem("sparkpoints")
    console.log(spark)
    document.getElementById("sparkpoints").textContent = spark
        });


}

//make arrow
svg.append("g")
    .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
    .append("path")
    .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
    .style({ "fill": "black" });

//draw spin circle
container.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 60)
    .style({ "fill": "white", "cursor": "pointer" });

//spin text
container.append("text")
    .attr("x", 0)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .text("SPIN")
    .style({ "font-weight": "bold", "font-size": "30px" });


function rotTween(to) {
    var i = d3.interpolate(oldrotation % 360, rotation);
    return function (t) {
        return "rotate(" + i(t) + ")";
    };
}


function getRandomNumbers() {
    var array = new Uint16Array(1000);
    var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);

    if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
        window.crypto.getRandomValues(array);
    } else {
        //no support for crypto, get crappy random numbers
        for (var i = 0; i < 1000; i++) {
            array[i] = Math.floor(Math.random() * 100000) + 1;
        }
    }

    return array;
}




var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

var spin = document.getElementById("spin")

btn.onclick = function () {
    modal.style.display = "block";
    spin.style.visibility = "visible"

}


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}