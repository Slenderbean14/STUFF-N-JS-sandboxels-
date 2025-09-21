modFunction(() => {
  elements.Recycle_Filter = {
    color: "#8888ff",
    category: "Filterings",
    state: "solid",
    density: 1000,
    filterList: ["Mud", "Grass", "Wood"], // whitelist of allowed elements
    tick: function(pixel) {
      for (let i = 0; i < adjacentCoords.length; i++) {
        let [dx, dy] = adjacentCoords[i];
        let x = pixel.x + dx;
        let y = pixel.y + dy;
        let other = pixelMap[x]?.[y];

        if (other && elements[pixel.element].filterList.includes(other.element)) {
          movePixel(other, dx, dy); // allow movement
        }
      }
    },
  };
});
