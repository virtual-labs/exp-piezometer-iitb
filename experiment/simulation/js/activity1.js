let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Pressure and Pressure Measurement: Piezometer</h5>
        <p>Learning Objective: Calculate Pressure</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Volume strain and increase in pressure", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>Water is flowing through pipe. A Piezometer is attached to the pipe as shown in the figure. The height (h) of water column in Piezometer is ${h} cm. Find the pressure of the water flowing through pipe. If the liquid is changed having specific gravity of 0.8, for the same pressure what will be the rise in height of liquid in Piezometer?</h5>
        <br>
        <div style='width: 41%; margin: auto;'><img style='margin-left: 25%; width: 50%;' src="./images/sim1.png" alt=""></div>
        <br>
        <p style='text-align: center;'>Figure 1</p>
        <br>
        <p style='text-align: center; font-size: 18px;'>
            height (H) in meters = 
            <span style='display: inline-block;' >
                $$ \\frac{h}{100} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal1-inp' > <span id='cal1-val-sp'></span>
        </p>

        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ take \\ g = 9.81 \\ m/sec^2 $$</span> </div>
        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ take \\ \\rho = 1000 \\ kg/m^3 $$</span> </div>

        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ p = \\rho \\times g \\times H $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal2-inp' > <span id='cal2-val-sp'></span> N/m<sup>2</sup>
        </p>

        

        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a1();'  id='temp-btn-120' >Verify</button></div>
        

    
        <br> 

        <div id='nxt' style='display: none;'>
            <div id='tab-1'></div>
        </div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
    h = h / 100;
    pressure = 1000 * 9.8 * h;
}
function verify_a1() {
    let btn = document.getElementById('temp-btn-120');
    console.log(`h => ${h}, pressure => ${pressure}`);
    let inp1 = document.getElementById('cal1-inp');
    let sp1 = document.getElementById('cal1-val-sp');
    let inp2 = document.getElementById('cal2-inp');
    let sp2 = document.getElementById('cal2-val-sp');
    if (!verify_values(parseFloat(inp1.value), h)) {
        alert('first value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), pressure)) {
        alert('second value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(h).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${pressure.toFixed(4)}`;
    alert('Your entered values are correct!!');
    let ele = document.getElementById('nxt');
    ele.style.display = 'block';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map