export const shadeColor = (color: string, percent: number) => {
  const initialRed = parseInt(color.substring(1, 3), 16);
  const initialGreen = parseInt(color.substring(3, 5), 16);
  const initialBlue = parseInt(color.substring(5, 7), 16);

  const red = Math.floor((initialRed * (100 + percent)) / 100);
  const green = Math.floor((initialGreen * (100 + percent)) / 100);
  const blue = Math.floor((initialBlue * (100 + percent)) / 100);

  const capedRed = red < 255 ? red : 255;
  const capedGreen = green < 255 ? green : 255;
  const capedBlue = blue < 255 ? blue : 255;

  var RR = capedRed.toString(16).length == 1 ? '0' + capedRed.toString(16) : capedRed.toString(16);
  var GG = capedGreen.toString(16).length == 1 ? '0' + capedGreen.toString(16) : capedGreen.toString(16);
  var BB = capedBlue.toString(16).length == 1 ? '0' + capedBlue.toString(16) : capedBlue.toString(16);

  return '#' + RR + GG + BB;
};
