let x = 0;
let y = 0;
let spacing = sizes;

function setup() {
    createCanvas(400, 400);
    background(0);
    slider = createSlider(0, 3, 0, 1);
    slider.position(0, 420);
    slider2 = createSlider(10, 25, 10, 5);
    slider2.position(150, 420);
    slider3 = createSlider(0, 1, 0.5, 0.1);
    slider3.position(0, 450);
    slider4 = createSlider(0, 255, 255, 51);
    slider4.position(150, 450);
    slider5 = createSlider(0, 255, 255, 51);
    slider5.position(150, 480);
    slider6 = createSlider(0, 255, 255, 51);
    slider6.position(150, 510);
}

function draw() {
    let val = slider.value();
    let sizes = slider2.value();
    let spacing = sizes;
    let randomValue = slider3.value();
    let colorValue1 = slider4.value();
    let colorValue2 = slider5.value();
    let colorValue3 = slider6.value();
    stroke(colorValue1, colorValue2, colorValue3);
        
    if (val == 0){
        if (random(1) < randomValue){
            line(x, y, x + spacing, y + spacing);
        } else {
            line(x, y + spacing, x + spacing, y);
        }
        x += spacing;
    } else if (val == 1){
        if (random(1) < randomValue){
            fill(colorValue1, colorValue2, colorValue3);
            rect(x, y, spacing, spacing);
        } 
        x += spacing; 
    } else if (val == 2){
        if (random(1) < randomValue){
            fill(colorValue1, colorValue2, colorValue3);
            triangle(x, y + spacing, x + spacing/2, y, x + spacing, y + spacing);
        } else {
            noFill();
            triangle(x, y, x + spacing/2, y + spacing, x + spacing, y);
        }
        x += spacing; 
    } else if ( val == 3){
        if (random(1) < randomValue){
            fill(colorValue1, colorValue2, colorValue3);
            noFill();
            arc(x, y, spacing/2, spacing, PI/2, 3/2 * PI, OPEN);
        } else {
            fill(colorValue1, colorValue2, colorValue3);
            noFill();
            arc(x, y, spacing, spacing/2, PI, 0, OPEN);
        }
        x += spacing;         
    }
    
    
    if (x > width){
        x = 0;
        y += spacing;
    }
    

    if (keyIsPressed === true){
        background(0);
        x = 0;
        y = 0;
    }
}


