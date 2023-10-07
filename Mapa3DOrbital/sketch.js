let Space;
let MenuTravel;
let Planet;
let Rocket;
let rotationSpeed = [];
let planets = [];
let distance = [];
let angle = [];
let numPlanets = 9;
let Render3D;

let FactorScale = 1.27;

let NombrePlaneta = "Earth";

let NombrePlanetaANT = "Earth";

document.getElementById("variableSpan");

let XPosInitial = 0;
let YPosInitial = 0;

let XPosMAP = 0;
let YPosMAP = 0;

let YPosMAPANTANIM = 0;

let XPosMAPANT = 0;
let YPosMAPANT = 0;

let mouseIsPressedANT = false;
let planet;

let SelectedPlanet = 0;

let InfoSelectedPlanet = 0;

let Factor = 0.001;

let InfoPlanetAnim = false;

let InfoPlanetAnimANT = false;

let angleANIMATION = 0;

let Trayectory = 0;

let StartPlanet = 0;

let AbleToMove = false;

let RotationSpeed = 1;

let cursorHand = false;

let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let x3 = 0;
let y3 = 0;
let x4 = 0;
let y4 = 0;
let x5 = 0;
let y5 = 0;
let x6 = 0;
let y6 = 0;
let x7 = 0;
let y7 = 0;
let x8 = 0;
let y8 = 0;
let x9 = 0;
let y9 = 0;

function preload() {
  Space = loadImage("Imagenes/Fondo.jpeg");
  MenuTravel = loadImage("Imagenes/MenuTravel.png");
  InfoPlanetButton = loadImage("Imagenes/InfoPlanet.png");
  InfoPlanetButton2 = loadImage("Imagenes/InfoPlanet2.png");
  InfoPlanetButton3 = loadImage("Imagenes/InfoPlanet3.png");
  Planet = loadModel("Modelos3D/Planet.obj", true);
  Rocket = loadModel("Modelos3D/Space-Shuttle.obj", true);
  Mercurio = loadImage("Textures/mercurymap.jpg");
  Venus = loadImage("Textures/venusmap.jpg");
  Tierra = loadImage("Textures/earthmap1k.jpg");
  Marte = loadImage("Textures/marsmap1k.jpg");
  Jupiter = loadImage("Textures/jupitermap.jpg");
  Saturno = loadImage("Textures/saturnmap.jpg");
  Urano = loadImage("Textures/uranusmap.jpg");
  Neptuno = loadImage("Textures/neptunemap.jpg");
  Pluton = loadImage("Textures/plutomap1k.jpg");
  Sol = loadImage("Textures/sunmap.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  angleMode(DEGREES);
  Render3D = createGraphics(windowWidth, windowHeight, WEBGL);

  // Crear los planetas
  for (let i = 0; i < numPlanets; i++) {
    angle[i] = 0;

    if (i == 0) {
      distance[i] = 60;
    } else if (i == 1) {
      distance[i] = 100;
    } else if (i == 2) {
      distance[i] = 150;
    } else if (i == 3) {
      distance[i] = 200;
    } else if (i == 4) {
      distance[i] = 250;
    } else if (i == 5) {
      distance[i] = 300;
    } else if (i == 6) {
      distance[i] = 350;
    } else if (i == 7) {
      distance[i] = 400;
    } else if (i == 8) {
      distance[i] = 450;
    }

    planets.push(planet);
  }
}

function draw() {

  if (mouseIsPressed == true) {
    XPosMAP = XPosInitial - mouseX + XPosMAPANT;

    YPosMAP = YPosInitial - mouseY + YPosMAPANT;
  } else {
    XPosMAPANT = XPosMAP;

    YPosMAPANT = YPosMAP;

    XPosInitial = mouseX;

    YPosInitial = mouseY;
  }

  if (mouseIsPressed == false) {
    mouseIsPressedANT = false;
  }

  background(0);
  imageMode(CENTER);
  image(Space, width / 2, height / 2, width, height);
  imageMode(CORNER);
  
  /*if (InfoPlanetAnimANT == true) {
    
    image(
      InfoPlanetButton3,
      width * 0.01,
      height * 0.01,
      InfoPlanetButton.width * 0.3,
      InfoPlanetButton.height * 0.3
    );
    
  if (
      mouseX >= width * 0.01 &&
      mouseX <= width * 0.01 + InfoPlanetButton.width * 0.3 &&
      mouseY >= height * 0.01 &&
      mouseY <= height * 0.01 + InfoPlanetButton.height * 0.3
    ) {
      cursor(HAND);

      if (mouseIsPressed) {
      
  image(
      InfoPlanetButton2,
      width * 0.01,
      height * 0.01,
      InfoPlanetButton.width * 0.3,
      InfoPlanetButton.height * 0.3
    );
        
    InfoPlanetAnim = false;
        
      }
  }
      
  } else {*/

  if (InfoPlanetAnim == true) {
    image(
      InfoPlanetButton3,
      width * 0.01,
      height * 0.01,
      InfoPlanetButton.width * 0.3,
      InfoPlanetButton.height * 0.3
    );
  } else {
    if (
      mouseX >= width * 0.01 &&
      mouseX <= width * 0.01 + InfoPlanetButton.width * 0.3 &&
      mouseY >= height * 0.01 &&
      mouseY <= height * 0.01 + InfoPlanetButton.height * 0.3
    ) {
      cursor(HAND);

      if (mouseIsPressed) {
        InfoPlanetAnim = true;
      } else {
        image(
          InfoPlanetButton2,
          width * 0.01,
          height * 0.01,
          InfoPlanetButton.width * 0.3,
          InfoPlanetButton.height * 0.3
        );
      }
    } else {
      cursor(CROSS);

      image(
        InfoPlanetButton,
        width * 0.01,
        height * 0.01,
        InfoPlanetButton.width * 0.3,
        InfoPlanetButton.height * 0.3
      );
    }
  }
    
  //}

  imageMode(CENTER);

  Render3D.push();

  Render3D.translate(-30, 0, 0);

  if (InfoPlanetAnimANT == false && InfoPlanetAnim == true) {
    if (angleANIMATION <= 180) {
      YPosMAP = map(
        sin(map(angleANIMATION, 0, 180, -90, 90)),
        -1,
        1,
        YPosMAP,
        -280
      );

      angleANIMATION = angleANIMATION + 60 / frameRate();
      
    } else {
      
      InfoPlanetAnimANT = true;
      
      angleANIMATION = 0;

      YPosMAP = -280;
    }
  }

  if (YPosMAP <= -280) {
    YPosMAP = -280;
  }

  if (YPosMAP >= 50) {
    YPosMAP = 50;
  }

  Render3D.scale(0.4);
  Render3D.rotateZ(QUARTER_PI / 2);
    
  Render3D.rotateY(-XPosMAP * 0.01);

  
  if (InfoPlanetAnim == false) {
    
  if (AbleToMove == true) {
      
  Render3D.rotateZ( map(angleANIMATION, 0, 180, 0, -YPosMAP * 0.0007));
    
  }
  
  } else {
    
  if (AbleToMove == true) {
    
  Render3D.rotateZ(-YPosMAP * 0.0007);
    
  }
    
  }
  Render3D.noStroke();

  Render3D.push();

  Render3D.texture(Sol);
  Render3D.sphere(100);

  Render3D.pop();

  // Dibuja los planetas y haz que orbiten alrededor del sol
  for (let i = 0; i < numPlanets; i++) {
    let planet = planets[i];

    let x = distance[i] * 3 * cos(angle[i]);
    let z = distance[i] * 3 * sin(angle[i]);

    Render3D.push();

    Render3D.translate(x, 0, z);

    if (i == 0) {
      x1 = x;
      y1 = z;
      //Render3D.rotateY(frameCount * rotationSpeed[0]);
      Render3D.scale(0.3);
      Render3D.texture(Mercurio);
      Render3D.sphere(70);
    } else if (i == 1) {
      x2 = x;
      y2 = z;
      //Render3D.rotateY(frameCount * rotationSpeed[1]);
      Render3D.scale(0.3);
      Render3D.texture(Venus);
      Render3D.sphere(80);
    } else if (i == 2) {
      x3 = x;
      y3 = z;
      //Render3D.rotateY(frameCount * rotationSpeed[2]);
      Render3D.scale(0.3);
      Render3D.texture(Tierra);
      Render3D.sphere(100);
    } else if (i == 3) {
      x4 = x;
      y4 = z;
      //Render3D.rotateY(frameCount * rotationSpeed[3]);
      Render3D.scale(0.3);
      Render3D.texture(Marte);
      Render3D.sphere(90);
    } else if (i == 4) {
      x5 = x;
      y5 = z;
      //Render3D.rotateY(frameCount * rotationSpeed[4]);
      Render3D.scale(0.3);
      Render3D.texture(Jupiter);
      Render3D.sphere(250);
    } else if (i == 5) {
      x6 = x;
      y6 = z;
      //Render3D.rotateY(frameCount * rotationSpeed[5]);
      Render3D.scale(0.3);
      Render3D.texture(Saturno);
      Render3D.sphere(230);
      Render3D.rotateX(PI*0.6);
      Render3D.torus(380, 40, 50, 10);
      
    } else if (i == 6) {
      x7 = x;
      y7 = z;
      //Render3D.rotateY(frameCount * rotationSpeed[6]);
      Render3D.scale(0.3);
      Render3D.texture(Urano);
      Render3D.sphere(120);
    } else if (i == 7) {
      x8 = x;
      y8 = z;
      //Render3D.rotateY(frameCount * rotationSpeed[7]);
      Render3D.scale(0.3);
      Render3D.texture(Neptuno);
      Render3D.sphere(95);
    } else if (i == 8) {
      x9 = x;
      y9 = z;
      //Render3D.rotateY(frameCount * rotationSpeed[8]);
      Render3D.scale(0.3);
      Render3D.texture(Pluton);
      Render3D.sphere(50);
    }
    Render3D.pop();

    angle[0] = angle[0] + (50000 / 100) * Factor;
    angle[1] = angle[1] + (50000 / 200) * Factor;
    angle[2] = angle[2] + (50000 / 300) * Factor;
    angle[3] = angle[3] + (50000 / 400) * Factor;
    angle[4] = angle[4] + (50000 / 500) * Factor;
    angle[5] = angle[5] + (50000 / 600) * Factor;
    angle[6] = angle[6] + (50000 / 800) * Factor;
    angle[7] = angle[7] + (50000 / 1000) * Factor;
    angle[8] = angle[8] + (50000 / 1200) * Factor;

    if (angle[0] >= 359) {
      angle[0] = 0;
    }
    if (angle[1] >= 359) {
      angle[1] = 0;
    }
    if (angle[2] >= 359) {
      angle[2] = 0;
    }
    if (angle[3] >= 359) {
      angle[3] = 0;
    }
    if (angle[4] >= 359) {
      angle[4] = 0;
    }
    if (angle[5] >= 359) {
      angle[5] = 0;
    }
        if (angle[6] >= 359) {
      angle[6] = 0;
    }
        if (angle[7] >= 359) {
      angle[7] = 0;
    }
        if (angle[8] >= 359) {
      angle[8] = 0;
    }

    rotationSpeed[0] = rotationSpeed[0] + 58.6 * Factor;
    rotationSpeed[1] = rotationSpeed[1] + 243 * Factor;
    rotationSpeed[2] = rotationSpeed[2] + 24 * Factor;
    rotationSpeed[3] = rotationSpeed[3] + 24.6 * Factor;
    rotationSpeed[4] = rotationSpeed[4] + 10 * Factor;
    rotationSpeed[5] = rotationSpeed[5] + 11 * Factor;
    rotationSpeed[6] = rotationSpeed[6] + 17.4 * Factor;
    rotationSpeed[7] = rotationSpeed[7] + 16 * Factor;
    rotationSpeed[8] = rotationSpeed[8] + 153.6 * Factor;
  }

  Render3D.noStroke();

  Render3D.fill(150);

  Render3D.rotateX(HALF_PI);

  if (SelectedPlanet == 2) {
    
  if (InfoPlanetAnim == true) {
    
    Render3D.fill(150, 150, 0);

    Render3D.torus(180, 3, 50, 10);
     
  } else {
    
    Render3D.fill(150);
    
    Render3D.torus(180, 1, 50, 10);
    
  }
  
  } else {
    Render3D.fill(150);

    Render3D.torus(180, 1, 50, 10);
  }

  if (SelectedPlanet == 3) {
    
  if (InfoPlanetAnim == true) {
        
    Render3D.fill(150, 150, 0);

    Render3D.torus(300, 3, 50, 10);
    
  } else {
    
    Render3D.fill(150);

    Render3D.torus(300, 1, 50, 10);
    
  }
    
  } else {
    Render3D.fill(150);

    Render3D.torus(300, 1, 50, 10);
  }

  if (SelectedPlanet == 4) {
    
  if (InfoPlanetAnim == true) {
    
    Render3D.fill(150, 150, 0);

    Render3D.torus(450, 3, 50, 10);
    
  } else {
    Render3D.fill(150);

    Render3D.torus(450, 1, 50, 10);
    
  }
  
  } else {
    Render3D.fill(150);

    Render3D.torus(450, 1, 50, 10);
  }

  if (SelectedPlanet == 5) {
    
  if (InfoPlanetAnim == true) {
    
    Render3D.fill(150, 150, 0);

    Render3D.torus(600, 3, 50, 10);
  
  } else {
    
    Render3D.fill(150);

    Render3D.torus(600, 1, 50, 10);
    
  }
    
  } else {
    Render3D.fill(150);

    Render3D.torus(600, 1, 50, 10);
  }

  if (SelectedPlanet == 6) {
    
  if (InfoPlanetAnim == true) {
    
    Render3D.fill(150, 150, 0);

    Render3D.torus(750, 3, 50, 10);
    
  } else {
    
    Render3D.fill(150);

    Render3D.torus(750, 1, 50, 10);
    
  }
    
  } else {
    Render3D.fill(150);

    Render3D.torus(750, 1, 50, 10);
  }

  if (SelectedPlanet == 7) {
    
  if (InfoPlanetAnim == true) {
    
    Render3D.fill(150, 150, 0);

    Render3D.torus(910, 3, 50, 10);
    
  } else {
    
    Render3D.fill(150);

    Render3D.torus(910, 1, 50, 10);
    
  }
    
  } else {
    Render3D.fill(150);

    Render3D.torus(910, 1, 50, 10);
  }

  if (SelectedPlanet == 8) {
    
  if (InfoPlanetAnim == true) {

    Render3D.fill(150, 150, 0);

    Render3D.torus(1050, 3, 50, 10);
    
  } else {
    
    Render3D.fill(150);

    Render3D.torus(1050, 1, 50, 10); 
    
  }
    
  } else {
    Render3D.fill(150);

    Render3D.torus(1050, 1, 50, 10);
  }

  if (SelectedPlanet == 9) {
    
  if (InfoPlanetAnim == true) {
    
    Render3D.fill(150, 150, 0);

    Render3D.torus(1200, 3, 100, 10);
    
  } else {
    
    Render3D.fill(150);

    Render3D.torus(1200, 1, 100, 10);
    
  }
    
  } else {
    Render3D.fill(150);

    Render3D.torus(1200, 1, 100, 10);
  }

  if (SelectedPlanet == 10) {
    
  if (InfoPlanetAnim == true) {
        
    Render3D.fill(150, 150, 0);

    Render3D.torus(1353, 3, 110, 10);
    
  } else {
    
    Render3D.fill(150);

    Render3D.torus(1353, 1, 110, 10);
    
  }
    
  } else {
    Render3D.fill(150);

    Render3D.torus(1353, 1, 110, 10);
  }
  
  Render3D.push();
  
  if (InfoPlanetAnim == true) {

  RotationSpeed = RotationSpeed + 2/frameRate();
  
  if (StartPlanet == 1) {
    
  Render3D.translate(x1, y1, 60);
  Render3D.scale(0.9);
  Render3D.fill(200);
  Render3D.noStroke();
      if (Trayectory == 0) {
      
  Render3D.rotateZ(RotationSpeed);
      
  } else {
    
  Render3D.rotateZ(map(atan2(y2 - y1, x2 - x1), -180, 180, HALF_PI, TWO_PI + HALF_PI));
  }
  Render3D.model(Rocket);
    
  } else if (StartPlanet == 2) {
    
  Render3D.translate(x2, y2, 60);
  Render3D.scale(0.9);
  Render3D.fill(200);
  Render3D.noStroke();
      if (Trayectory == 0) {
      
  Render3D.rotateZ(RotationSpeed);
      
  } else {
    
  Render3D.rotateZ(map(atan2(y2 - y1, x2 - x1), -180, 180, HALF_PI, TWO_PI + HALF_PI));
  }
  Render3D.model(Rocket);
    
  } else if (StartPlanet == 3) {
    
  Render3D.translate(x3, y3, 60);
  Render3D.scale(0.9);
  Render3D.fill(200);
  Render3D.noStroke();
      if (Trayectory == 0) {
      
  Render3D.rotateZ(RotationSpeed);
      
  } else {
    
  Render3D.rotateZ(map(atan2(y2 - y1, x2 - x1), -180, 180, HALF_PI, TWO_PI + HALF_PI));
  }
  Render3D.model(Rocket);
    
  } else if (StartPlanet == 4) {
    
  Render3D.translate(x4, y4, 60);
  Render3D.scale(0.9);
  Render3D.fill(200);
  Render3D.noStroke();
      if (Trayectory == 0) {
      
  Render3D.rotateZ(RotationSpeed);
      
  } else {
    
  Render3D.rotateZ(map(atan2(y2 - y1, x2 - x1), -180, 180, HALF_PI, TWO_PI + HALF_PI));
  }
  Render3D.model(Rocket);
    
  } else if (StartPlanet == 5) {
    
  Render3D.translate(x5, y5, 110);
  Render3D.scale(0.9);
  Render3D.fill(200);
  Render3D.noStroke();
      if (Trayectory == 0) {
      
  Render3D.rotateZ(RotationSpeed);
      
  } else {
    
  Render3D.rotateZ(map(atan2(y2 - y1, x2 - x1), -180, 180, HALF_PI, TWO_PI + HALF_PI));
  }
  Render3D.model(Rocket);
    
  } else if (StartPlanet == 6) {
    
  Render3D.translate(x6, y6, 110);
  Render3D.scale(0.9);
  Render3D.fill(200);
  Render3D.noStroke();
      if (Trayectory == 0) {
      
  Render3D.rotateZ(RotationSpeed);
      
  } else {
    
  Render3D.rotateZ(map(atan2(y2 - y1, x2 - x1), -180, 180, HALF_PI, TWO_PI + HALF_PI));
  }
  Render3D.model(Rocket);
    
  } else if (StartPlanet == 7) {
    
  Render3D.translate(x7, y7, 60);
  Render3D.scale(0.9);
  Render3D.fill(200);
  Render3D.noStroke();
      if (Trayectory == 0) {
      
  Render3D.rotateZ(RotationSpeed);
      
  } else {
    
  Render3D.rotateZ(map(atan2(y2 - y1, x2 - x1), -180, 180, HALF_PI, TWO_PI + HALF_PI));
  }
  Render3D.model(Rocket);
    
  } else if (StartPlanet == 8) {
    
  Render3D.translate(x8, y8, 60);
  Render3D.scale(0.9);
  Render3D.fill(200);
  Render3D.noStroke();
    if (Trayectory == 0) {
      
  Render3D.rotateZ(RotationSpeed);
      
  } else {
    
  Render3D.rotateZ(map(atan2(y2 - y1, x2 - x1), -180, 180, HALF_PI, TWO_PI + HALF_PI));
  }
  Render3D.model(Rocket);
    
  } else if (StartPlanet == 9) {
    
  Render3D.translate(x9, y9, 60);
  Render3D.scale(0.9);
  Render3D.fill(200);
  Render3D.noStroke();
  if (Trayectory == 0) {
      
  Render3D.rotateZ(RotationSpeed);
      
  } else {
    
  Render3D.rotateZ(map(atan2(y2 - y1, x2 - x1), -180, 180, HALF_PI, TWO_PI + HALF_PI));
    
  }
  Render3D.model(Rocket);
    
  }
  
  if (Trayectory == 1) {
  
  Render3D.translate(0, dist(x2, y2, x1, y1)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x2, y2, x1, y1) + 40);
  
  } else if (Trayectory == 2) {
    
  Render3D.translate(0, dist(x3, y3, x1, y1)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x3, y3, x1, y1) + 40);
    
  } else if (Trayectory == 3) {
    
  Render3D.translate(0, dist(x4, y4, x1, y1)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x4, y4, x1, y1) + 40);
    
  } else if (Trayectory == 4) {
    
  Render3D.translate(0, dist(x5, y5, x1, y1)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x5, y5, x1, y1) + 40);
    
  } else if (Trayectory == 5) {
    
  Render3D.translate(0, dist(x6, y6, x1, y1)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x6, y6, x1, y1) + 40);
    
  } else if (Trayectory == 6) {
    
  Render3D.translate(0, dist(x7, y7, x1, y1)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x7, y7, x1, y1) + 40);
    
  } else if (Trayectory == 7) {
    
  Render3D.translate(0, dist(x8, y8, x1, y1)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x8, y8, x1, y1) + 40);
    
  } else if (Trayectory == 8) {
    
  Render3D.translate(0, dist(x9, y9, x1, y1)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x9, y9, x1, y1) + 40);
    
  } else if (Trayectory == 9) {
  
  Render3D.translate(0, dist(x1, y1, x2, y2)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x1, y1, x2, y2) + 40);
  
  } else if (Trayectory == 10) {
    
  Render3D.translate(0, dist(x3, y3, x2, y2)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x3, y3, x2, y2) + 40);
    
  } else if (Trayectory == 11) {
    
  Render3D.translate(0, dist(x4, y4, x2, y2)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x4, y4, x2, y2) + 40);
    
  } else if (Trayectory == 12) {
    
  Render3D.translate(0, dist(x5, y5, x2, y2)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x5, y5, x2, y2) + 40);
    
  } else if (Trayectory == 13) {
    
  Render3D.translate(0, dist(x6, y6, x2, y2)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x6, y6, x2, y2) + 40);
    
  } else if (Trayectory == 14) {
    
  Render3D.translate(0, dist(x7, y7, x2, y2)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x7, y7, x2, y2) + 40);
    
  } else if (Trayectory == 15) {
    
  Render3D.translate(0, dist(x8, y8, x2, y2)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x8, y8, x2, y2) + 40);
    
  } else if (Trayectory == 16) {
    
  Render3D.translate(0, dist(x9, y9, x2, y2)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x9, y9, x2, y2) + 40);
    
  } else if (Trayectory == 17) {
  
  Render3D.translate(0, dist(x1, y1, x3, y3)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x1, y1, x3, y3) + 40);
  
  } else if (Trayectory == 18) {
    
  Render3D.translate(0, dist(x2, y2, x3, y3)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x2, y2, x3, y3) + 40);
    
  } else if (Trayectory == 19) {
    
  Render3D.translate(0, dist(x4, y4, x3, y3)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x4, y4, x3, y3) + 40);
    
  } else if (Trayectory == 20) {
    
  Render3D.translate(0, dist(x5, y5, x3, y3)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x5, y5, x3, y3) + 40);
    
  } else if (Trayectory == 21) {
    
  Render3D.translate(0, dist(x6, y6, x3, y3)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x6, y6, x3, y3) + 40);
    
  } else if (Trayectory == 22) {
    
  Render3D.translate(0, dist(x7, y7, x3, y3)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x7, y7, x3, y3) + 40);
    
  } else if (Trayectory == 23) {
    
  Render3D.translate(0, dist(x8, y8, x3, y3)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x8, y8, x3, y3) + 40);
    
  } else if (Trayectory == 24) {
    
  Render3D.translate(0, dist(x9, y9, x3, y3)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x9, y9, x3, y3) + 40);
    
  } else if (Trayectory == 25) {
  
  Render3D.translate(0, dist(x1, y1, x3, y3)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x1, y1, x4, y4) + 40);
  
  } else if (Trayectory == 26) {
    
  Render3D.translate(0, dist(x2, y2, x4, y4)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x2, y2, x4, y4) + 40);
    
  } else if (Trayectory == 27) {
    
  Render3D.translate(0, dist(x3, y3, x4, y4)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x3, y3, x4, y4) + 40);
    
  } else if (Trayectory == 28) {
    
  Render3D.translate(0, dist(x5, y5, x4, y4)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x5, y5, x4, y4) + 40);
    
  } else if (Trayectory == 29) {
    
  Render3D.translate(0, dist(x6, y6, x4, y4)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x6, y6, x4, y4) + 40);
    
  } else if (Trayectory == 30) {
    
  Render3D.translate(0, dist(x7, y7, x4, y4)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x7, y7, x4, y4) + 40);
    
  } else if (Trayectory == 31) {
    
  Render3D.translate(0, dist(x8, y8, x4, y4)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x8, y8, x4, y4) + 40);
    
  } else if (Trayectory == 32) {
    
  Render3D.translate(0, dist(x9, y9, x4, y4)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x9, y9, x4, y4) + 40);
    
  } else if (Trayectory == 33) {
  
  Render3D.translate(0, dist(x1, y1, x5, y5)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x1, y1, x5, y5) + 40);
  
  } else if (Trayectory == 34) {
    
  Render3D.translate(0, dist(x2, y2, x5, y5)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x2, y2, x5, y5) + 40);
    
  } else if (Trayectory == 35) {
    
  Render3D.translate(0, dist(x3, y3, x5, y5)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x3, y3, x5, y5) + 40);
    
  } else if (Trayectory == 36) {
    
  Render3D.translate(0, dist(x4, y4, x5, y5)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x4, y4, x5, y5) + 40);
    
  } else if (Trayectory == 37) {
    
  Render3D.translate(0, dist(x6, y6, x5, y5)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x6, y6, x5, y5) + 40);
    
  } else if (Trayectory == 38) {
    
  Render3D.translate(0, dist(x7, y7, x5, y5)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x7, y7, x5, y5) + 40);
    
  } else if (Trayectory == 39) {
    
  Render3D.translate(0, dist(x8, y8, x5, y5)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x8, y8, x5, y5) + 40);
    
  } else if (Trayectory == 40) {
    
  Render3D.translate(0, dist(x9, y9, x5, y5)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x9, y9, x5, y5) + 40);
    
  } else if (Trayectory == 41) {
  
  Render3D.translate(0, dist(x1, y1, x6, y6)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x1, y1, x6, y6) + 40);
  
  } else if (Trayectory == 42) {
    
  Render3D.translate(0, dist(x2, y2, x6, y6)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x2, y2, x6, y6) + 40);
    
  } else if (Trayectory == 43) {
    
  Render3D.translate(0, dist(x3, y3, x6, y6)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x3, y3, x6, y6) + 40);
    
  } else if (Trayectory == 44) {
    
  Render3D.translate(0, dist(x4, y4, x6, y6)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x4, y4, x6, y6) + 40);
    
  } else if (Trayectory == 45) {
    
  Render3D.translate(0, dist(x5, y5, x6, y6)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x5, y5, x6, y6) + 40);
    
  } else if (Trayectory == 46) {
    
  Render3D.translate(0, dist(x7, y7, x6, y6)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x7, y7, x6, y6) + 40);
    
  } else if (Trayectory == 47) {
    
  Render3D.translate(0, dist(x8, y8, x6, y6)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x8, y8, x6, y6) + 40);
    
  } else if (Trayectory == 48) {
    
  Render3D.translate(0, dist(x9, y9, x6, y6)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x9, y9, x6, y6) + 40);
    
  } else if (Trayectory == 49) {
  
  Render3D.translate(0, dist(x1, y1, x7, y7)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x1, y1, x7, y7) + 40);
  
  } else if (Trayectory == 50) {
    
  Render3D.translate(0, dist(x2, y2, x7, y7)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x2, y2, x7, y7) + 40);
    
  } else if (Trayectory == 51) {
    
  Render3D.translate(0, dist(x3, y3, x7, y7)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x3, y3, x7, y7) + 40);
    
  } else if (Trayectory == 52) {
    
  Render3D.translate(0, dist(x4, y4, x7, y7)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x4, y4, x7, y7) + 40);
    
  } else if (Trayectory == 53) {
    
  Render3D.translate(0, dist(x5, y5, x7, y7)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x5, y5, x7, y7) + 40);
    
  } else if (Trayectory == 54) {
    
  Render3D.translate(0, dist(x6, y6, x7, y7)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x6, y6, x7, y7) + 40);
    
  } else if (Trayectory == 55) {
    
  Render3D.translate(0, dist(x8, y8, x7, y7)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x8, y8, x7, y7) + 40);
    
  } else if (Trayectory == 56) {
    
  Render3D.translate(0, dist(x9, y9, x7, y7)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x9, y9, x7, y7) + 40);
    
  } else if (Trayectory == 57) {
  
  Render3D.translate(0, dist(x1, y1, x8, y8)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x1, y1, x8, y8) + 40);
  
  } else if (Trayectory == 58) {
    
  Render3D.translate(0, dist(x2, y2, x8, y8)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x2, y2, x8, y8) + 40);
    
  } else if (Trayectory == 59) {
    
  Render3D.translate(0, dist(x3, y3, x8, y8)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x3, y3, x8, y8) + 40);
    
  } else if (Trayectory == 60) {
    
  Render3D.translate(0, dist(x4, y4, x8, y8)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x4, y4, x8, y8) + 40);
    
  } else if (Trayectory == 61) {
    
  Render3D.translate(0, dist(x5, y5, x8, y8)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x5, y5, x8, y8) + 40);
    
  } else if (Trayectory == 62) {
    
  Render3D.translate(0, dist(x6, y6, x8, y8)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x6, y6, x8, y8) + 40);
    
  } else if (Trayectory == 63) {
    
  Render3D.translate(0, dist(x7, y7, x8, y8)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x7, y7, x8, y8) + 40);
    
  } else if (Trayectory == 64) {
    
  Render3D.translate(0, dist(x9, y9, x8, y8)/2, -30);
  
  Render3D.fill(200, 0, 0);
  
  Render3D.cylinder(3, dist(x9, y9, x8, y8) + 40);
    
  }
  
  }
  
  Render3D.pop();

  Render3D.camera(700, YPosMAP * 3, 0, 0, 0, 0, 0, 1, 0);

  image(Render3D, width / 2, height / 2);
  
  if (InfoPlanetAnim == false) {
    
    InfoSelectedPlanet = 0;
    
  }
  if (InfoSelectedPlanet != 0 && InfoSelectedPlanet != 1) {
      
  image(MenuTravel, width*0.1,  height*0.8 - 10, MenuTravel.width*0.4, MenuTravel.height*0.4);
    
  if (mouseX >= 30 && mouseX <= 100 && mouseY >= 310 + 0 && mouseY <= 310 + 15) {
    
    if (mouseIsPressed) {
        
        if (SelectedPlanet == 1){
          
        
        
        } else if (SelectedPlanet == 2) {
                   
        Trayectory = 9;
                   
        } else if (SelectedPlanet == 3) {
                   
        Trayectory = 17;
                   
        }
      
    }
      
      cursor(HAND);
    
    cursorHand = true;
      
  } else if (mouseX >= 30 && mouseX <= 100 && mouseY >= 310 + 0 && mouseY <= 310 + 15) {
      
      cursor(HAND);
    
    cursorHand = true;
      
  } else if (mouseX >= 30 && mouseX <= 100 && mouseY >= 310 + 15 && mouseY <= 310 + 30) {
      
      cursor(HAND);
    
    cursorHand = true;
      
  } else if (mouseX >= 30 && mouseX <= 100 && mouseY >= 310 + 30 && mouseY <= 310 + 45) {
      
      cursor(HAND);
    
    cursorHand = true;
      
  } else if (mouseX >= 30 && mouseX <= 100 && mouseY >= 310 + 45 && mouseY <= 310 + 60) {
      
      cursor(HAND);
    
    cursorHand = true;
      
  } else if (mouseX >= 30 && mouseX <= 100 && mouseY >= 310 + 60 && mouseY <= 310 + 75) {
      
      cursor(HAND);
    
    cursorHand = true;
      
  } else if (mouseX >= 30 && mouseX <= 100 && mouseY >= 310 + 75 && mouseY <= 310 + 90) {
      
      cursor(HAND);
    
    cursorHand = true;
      
  } else if (mouseX >= 30 && mouseX <= 100 && mouseY >= 310 + 90 && mouseY <= 310 + 105) {
      
      cursor(HAND);
    
    cursorHand = true;
      
  } else if (mouseX >= 30 && mouseX <= 100 && mouseY >= 310 + 105 && mouseY <= 310 + 120) {
      
      cursor(HAND);
    
    cursorHand = true;
      
  } else if (mouseX >= 30 && mouseX <= 100 && mouseY >= 310 + 120 && mouseY <= 310 + 135) {
      
      cursor(HAND);
    
    cursorHand = true;
      
  } else {
    
    cursor(ARROW);
    
  }
      
  }
  
  if (InfoSelectedPlanet == 1) {
    
    StartPlanet = 0;
    
    stroke(255);
    strokeWeight(3);
      
    line(width/2, height/2 - 10 * FactorScale, width/2 + width*0.1, height/2 -height*0.1 - 10 * FactorScale);
      
    line(width/2 + width*0.1, height/2 -height*0.1 - 10 * FactorScale, width, height/2 -height*0.1 - 10 * FactorScale);

    //NombrePlaneta = "Sun";
    //NombrePlanetaANT = "Sun";
    
  } else if (InfoSelectedPlanet == 2) {
    
    StartPlanet = 1;
    
    stroke(255);
    strokeWeight(3);
      
    line(width/2 + 20 * FactorScale, height/2 - 10 - 20 * FactorScale, width/2 + width*0.1  + 20 * FactorScale, height/2 -height*0.1 - 20 * FactorScale);
    
    line(width/2 + width*0.1 + 20 * FactorScale, height/2 -height*0.1 - 20 * FactorScale, width, height/2 -height*0.1 - 20 * FactorScale);

    NombrePlaneta = "Mercury";
    NombrePlanetaANT = "Mercury";
      
  } else if (InfoSelectedPlanet == 3) {
    
    StartPlanet = 2;
    
    stroke(255);
    strokeWeight(3);
      
    line(width/2 + 30 * FactorScale, height/2 - 10 - 30 * FactorScale, width/2 + width*0.1 + 30 * FactorScale, height/2 -height*0.1 - 30 * FactorScale);
    
    line(width/2 + width*0.1 + 30 * FactorScale, height/2 -height*0.1 - 30 * FactorScale, width * FactorScale, height/2 -height*0.1 - 30 * FactorScale);

    NombrePlaneta = "Venus";
    NombrePlanetaANT = "Venus";
      
  } else if (InfoSelectedPlanet == 4) {
    
    StartPlanet = 3;
    
    stroke(255);
    strokeWeight(3);
      
    line(width/2 + 44 * FactorScale, height/2 - 10 - 44 * FactorScale, width/2 + width*0.1 + 44 * FactorScale, height/2 -height*0.1 - 44 * FactorScale);
    
    line(width/2 + width*0.1 + 44 * FactorScale, height/2 -height*0.1 - 44 * FactorScale, width, height/2 -height*0.1 - 44 * FactorScale);

    NombrePlaneta = "Earth";
    NombrePlanetaANT = "Earth";

  } else if (InfoSelectedPlanet == 5) {
    
    StartPlanet = 4;
    
    stroke(255);
    strokeWeight(3);
      
    line(width/2 + 59 * FactorScale, height/2 - 10 - 59 * FactorScale, width/2 + width*0.1 + 59 * FactorScale, height/2 -height*0.1 - 59 * FactorScale);
    
    line(width/2 + width*0.1 + 59 * FactorScale, height/2 -height*0.1 - 59 * FactorScale, width, height/2 -height*0.1 - 59 * FactorScale);

    NombrePlaneta = "Mars";
    NombrePlanetaANT = "Mars";

  } else if (InfoSelectedPlanet == 6) {
    
    StartPlanet = 5;
    
    stroke(255);
    strokeWeight(3);
      
    line(width/2 + 72 * FactorScale, height/2 - 10 - 72 * FactorScale, width/2 + width*0.1 + 72 * FactorScale, height/2 -height*0.1 - 72 * FactorScale);
    
    line(width/2 + width*0.1 + 72 * FactorScale, height/2 -height*0.1 - 72 * FactorScale, width, height/2 -height*0.1 - 72 * FactorScale);

    NombrePlaneta = "Jupiter";
    NombrePlanetaANT = "Jupiter";

  } else if (InfoSelectedPlanet == 7) {
    
    StartPlanet = 6;
    
    stroke(255);
    strokeWeight(3);
      
    line(width/2 + 86 * FactorScale, height/2 - 10 - 86 * FactorScale, width/2 + width*0.1 + 86 * FactorScale, height/2 -height*0.1 - 86 * FactorScale);
    
    line(width/2 + width*0.1 + 86 * FactorScale, height/2 -height*0.1 - 86 * FactorScale, width, height/2 -height*0.1 - 86 * FactorScale);

    NombrePlaneta = "Saturn";
    NombrePlanetaANT = "Saturn";

  } else if (InfoSelectedPlanet == 8) {
    
    StartPlanet = 7;
    
    stroke(255);
    strokeWeight(3);
      
    line(width/2 + 99 * FactorScale, height/2 - 10 - 99 * FactorScale, width/2 + width*0.1 + 99 * FactorScale, height/2 -height*0.1 - 99 * FactorScale);
    
    line(width/2 + width*0.1 + 99 * FactorScale, height/2 -height*0.1 - 99 * FactorScale, width, height/2 -height*0.1 - 99 * FactorScale);

    NombrePlaneta = "Uranus";
    NombrePlanetaANT = "Uranus";

  } else if (InfoSelectedPlanet == 9) {
    
    StartPlanet = 8;
    
    stroke(255);
    strokeWeight(3);
      
    line(width/2 + 112 * FactorScale, height/2 - 10 - 112 * FactorScale, width/2 + width*0.1 + 112 * FactorScale, height/2 -height*0.1 - 112 * FactorScale);
    
    line(width/2 + width*0.1 + 112 * FactorScale, height/2 -height*0.1 - 112 * FactorScale, width, height/2 -height*0.1 - 112 * FactorScale);

    NombrePlaneta = "Neptune";
    NombrePlanetaANT = "Neptune";

  } else if (InfoSelectedPlanet == 10) {
    
    StartPlanet = 9;
    
    stroke(255);
    strokeWeight(3);
      
    line(width/2 + 125 * FactorScale, height/2 - 10 - 125 * FactorScale, width/2 + width*0.1 + 125 * FactorScale, height/2 -height*0.1 - 125 * FactorScale);
    
    line(width/2 + width*0.1 + 125 * FactorScale, height/2 -height*0.1 - 125 * FactorScale, width/2 + width, height/2 -height*0.1 - 125 * FactorScale);

    //NombrePlaneta = "Pluto";
    //NombrePlanetaANT = "Pluto";

  }

  Render3D.clear();

  let Radius = dist(mouseX - width / 2, mouseY - height / 2, 0, -10);

  cursor(HAND);
  
  if (Radius < 12 * FactorScale) {
    //console.log("Sun");

    SelectedPlanet = 1;
    
    if (mouseIsPressed) {
      
      InfoSelectedPlanet = 1;
      
    }
    
  } else if (Radius >= 12 * FactorScale && Radius <= 28 * FactorScale) {
    //console.log("Mercury");

    SelectedPlanet = 2;
    
    if (mouseIsPressed) {
      
      InfoSelectedPlanet = 2;
      
    }
    
  } else if (Radius > 28 * FactorScale && Radius <= 49 * FactorScale) {
    //console.log("Venus");

    SelectedPlanet = 3;
    
    if (mouseIsPressed) {
      
      InfoSelectedPlanet = 3;
      
    }
    
  } else if (Radius > 49 * FactorScale && Radius <= 72 * FactorScale) {
    //console.log("Earth");

    SelectedPlanet = 4;
    
    if (mouseIsPressed) {
      
      InfoSelectedPlanet = 4;
      
    }
    
  } else if (Radius > 72 * FactorScale && Radius <= 92 * FactorScale) {
    //console.log("Mars");

    SelectedPlanet = 5;
    
    if (mouseIsPressed) {
      
      InfoSelectedPlanet = 5;
      
    }
  } else if (Radius > 92 * FactorScale && Radius <= 120 * FactorScale) {
    //console.log("Jupiter");

    SelectedPlanet = 6;
    
    if (mouseIsPressed) {
      
      InfoSelectedPlanet = 6;
      
    }
    
  } else if (Radius > 120 * FactorScale && Radius <= 143 * FactorScale) {
    //console.log("Saturn");

    SelectedPlanet = 7;
    
    if (mouseIsPressed) {
      
      InfoSelectedPlanet = 7;
      
    }
    
  } else if (Radius > 143 * FactorScale && Radius <= 165 * FactorScale) {
    //console.log("Uranus");

    SelectedPlanet = 8;
    
    if (mouseIsPressed) {
      
      InfoSelectedPlanet = 8;
      
    }
    
  } else if (Radius > 168 * FactorScale && Radius <= 195 * FactorScale) {
    //console.log("Neptune");

    SelectedPlanet = 9;
    
    if (mouseIsPressed) {
      
      InfoSelectedPlanet = 9;
      
    }
    
  } else if (Radius > 195 * FactorScale && Radius <= 218 * FactorScale) {
    //console.log("Pluto");

    SelectedPlanet = 10;
    
    if (mouseIsPressed) {
      
      InfoSelectedPlanet = 10;
      
    }
    
  } else {
    
    if (mouseX >= 20 && mouseX <= 105 && mouseY >= 300 + 0 && mouseY <= 320 + 120) {
      
    } else {
      
    //console.log("No planet selected");

    SelectedPlanet = 0;
    
    if (cursorHand == false) {
      
    cursor(ARROW);
      
    }
    
    cursorHand = false;
    
    if (mouseIsPressed) {
      
      InfoSelectedPlanet = 0;
      
    }
      
    }
    
  }

  //console.log(Radius);
  
  AbleToMove = false;
  
}

function mouseDragged() {
  
  let distancemouse = 0;
  
  if (pmouseX - mouseX >= 0) {
    
    distancemouse = pmouseX - mouseX;
    
  } else {
    
    distancemouse = mouseX - pmouseX;
    
  }
  
  if (InfoPlanetAnim == true && distancemouse >= 4) {
    
    AbleToMove = true;
    
    angleANIMATION = 0;
    
    InfoPlanetAnim = false;
    
    InfoPlanetAnimANT = false;
    
    StartPlanet = 0;
    
  }
  
}

function windowResized() {

resizeCanvas(windowWidth, windowHeight);

}

function mouseClicked(){

  if (NombrePlanetaANT == NombrePlaneta) {

    NombrePlanetaANT = "JJKBJKSDVBGVJK";

   const planet = 'Mars';
const apiUrl = `https://planets-17f2.onrender.com/planets/getPlanet?name=${NombrePlaneta}`;

console.log(NombrePlaneta)

function getApi(url) {
    fetch(url)
        .then(res => res.json())
        .then(jsonDelBack => {
            console.log(jsonDelBack);
            showInfo(jsonDelBack);
        })
}

const container = document.getElementById("container");
const descripcion = document.getElementsByClassName("descripcion");
const nombrePlaneta = document.getElementsByClassName("titulo");

function cerrarDivTitulo(){
    container.remove();
}

function showInfo(json) {
    const nuevoDiv = document.createElement('div');
    container.innerHTML = ``;
    nuevoDiv.classList.add('container');
    const nombre = json.name;
    const distancia = json.distanceFromSun;
    const descripcion = json.description;
    const lunas = json.numberOfMoons;
    const nombreSignificado = json.namesake;
    
    nuevoDiv.innerHTML = `
    
    <button class="cerrar" onclick="cerrarDivTitulo()">&#10006;</button>
    <div class="titulo">
    ${nombre}
    
    </div>
    <div class="descripcion">
    Distancia del Sol: ${distancia}.<br>
    <br>
    Descripcion: ${descripcion}<br>
    <br>
    Numero de lunas: ${lunas}.<br>
    <br>
    Significado del nombre: ${nombreSignificado}.<br>
    </div>`;
    
    container.appendChild(nuevoDiv);
}

getApi(apiUrl);

  }

}