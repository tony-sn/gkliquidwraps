import colour1 from "./2313035.png";
import colour2 from "./4548509.png";
import colour3 from "./6908035.png";
import colour4 from "./7934910.png";
import colour5 from "./8877389.png";
import colour6 from "./9954977.png";

export const colours = [colour1, colour2, colour3, colour4, colour5, colour6];
export const colourByIndex = (index) => colours[index % colours.length];
