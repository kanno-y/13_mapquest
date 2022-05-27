L.mapquest.key = "UOCeXHkJG4ieG4sW9bz6ek3JVt4AaV4L";

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer("hybrid"),
  zoom: 12,
});

// y.Kanno19940521
map.addControl(L.mapquest.control({ position: "bottomright" }));

L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: "#371B58",
    secondaryColor: "#3B5998",
    shadow: true,
    size: "lg",
    symbol: "F",
  }),
})
  .bindPopup("This is Manchester!")
  .addTo(map);
