ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
  center: [59.936637, 30.321004],
  zoom: 16
});

var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
  iconLayout: 'default#image',
  iconImageHref: "img/icon-map-marker.svg",
  iconImageSize: [36, 35],
  iconImageOffset: [-17, 12]
});

myMap.geoObjects
  .add(myPlacemark);
}
