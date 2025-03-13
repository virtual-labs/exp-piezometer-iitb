function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calcuate new height</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate height", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>


        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ p = \\rho_1 \\times g \\times h_1 $$</span> </div>

        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ h1 = \\frac{p}{\\rho_1 \\times g} $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal3-inp' > <span id='cal3-val-sp'></span> m</div>

        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a2();'  id='temp-btn-20' >Verify</button></div>
        
    </div>

    `;
    maindiv.innerHTML += text;
    show_step('tb2-box');
    internal_calculations1();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    new_height = pressure / (1000 * 0.8 * 9.81);
}
function verify_a2() {
    let btn = document.getElementById('temp-btn-20');
    console.log(`K => ${new_height}`);
    let inp = document.getElementById('cal3-inp');
    let sp = document.getElementById('cal3-val-sp');
    if (!verify_values(parseFloat(inp.value), new_height)) {
        alert('Bulk Modulus value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${new_height.toFixed(4)}`;
    alert('Your entered value is correct!!');
}
//# sourceMappingURL=activity2.js.map