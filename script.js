var colorCanvas = document.getElementById('color_canvas');
var ColorCtx = colorCanvas.getContext('2d');

// Create a Vertical Gradient (white to black)
let gradientV = ColorCtx.createLinearGradient(0, 0, 0, 300);
gradientV.addColorStop(0, 'rgba(0,0,0,0)');
gradientV.addColorStop(1, '#000');
ColorCtx.fillStyle = gradientV;
ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, ColorCtx.canvas.height);

// Create a horizontal gradient (blue)
var color = '#0000ff';
let gradientH = ColorCtx.createLinearGradient(0, 0, ColorCtx.canvas.width, 0);
gradientH.addColorStop(0, '#fff');
gradientH.addColorStop(1, color);
ColorCtx.fillStyle = gradientH;
ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, ColorCtx.canvas.height);

colorCanvas.addEventListener('click', function(event) {
  let x = event.clientX;  
  let y = event.clientY;  
  pixel = ColorCtx.getImageData(x, y, 1, 1)['data'];   
  rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
  document.body.style.background = rgb;    
});