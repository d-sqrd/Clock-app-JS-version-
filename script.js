function draw(){
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 500;

  ctx.translate(250, 250);
  ctx.save();
  ctx.scale(0.5, 0.5);

  //Hour marks
  for(var i = 0; i < 12; i++){
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(0, -270);
    ctx.lineTo(0, -235);
    ctx.lineWidth = 7;
    ctx.stroke();
  }

  //Minute marks
  for(var i = 0; i < 60; i++){
    ctx.beginPath();
    ctx.rotate(Math.PI / 30);
    ctx.moveTo(0, -270);
    ctx.lineTo(0, -245);
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  ctx.restore();

  const time = new Date();
  var sec = time.getSeconds();
  var min = time.getMinutes();
  var hour = time.getHours();

  ctx.save();

  //Draw minutes hand
  ctx.beginPath();
  ctx.rotate(Math.PI / 30 * min + Math.PI / 1800 * sec);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -100);
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.restore();

  ctx.save();

  //Draw hours hand
  ctx.beginPath();
  ctx.rotate(Math.PI / 6 * hour + Math.PI / 1800 * sec + Math.PI / 369 * min);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -80);
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.save();

  //Draw seconds hand
  ctx.beginPath();
  ctx.rotate(Math.PI / 30 * sec);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -110);
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'red';
  ctx.stroke();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(0, 0, 7, 0, 2 * Math.PI, true);
  ctx.fill();

  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);




