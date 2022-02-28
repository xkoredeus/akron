$(document).ready(function () {
  var myMap;
  let center;
  let zoom;
  if ( $(window).width() > 1200 ) {
    center = [47.399147, 39.127788];
    zoom = [7.5];
  } else {
    center = [47.372560, 40.769866];
    zoom = [7];
  }
  ymaps.ready(init);
  function init(){
    myMap = new ymaps.Map("ymap", {
      center,
      zoom,
      // scrollZoom: false,
      controls: ["typeSelector"],
    });
    myMap.behaviors.disable('drag');
    myMap.behaviors.disable('scrollZoom');
    var placemarks = [
      {
        coords: [47.185511, 39.656425],
        icon: 'assets/img/baloon.svg',
        icon_size: [31, 43],
        icon_offset: [-15.5, -21.5], // -50% ширины, -100% высоты от точки привязки (левый верхний угол)
      },
      {
        coords: [47.767689, 39.940580],
        icon: 'assets/img/baloon.svg',
        icon_size: [31, 43],
        icon_offset: [-15.5, -21.5],
      },
      {
        coords: [47.528465, 42.134257],
        icon: 'assets/img/baloon.svg',
        icon_size: [31, 43],
        icon_offset: [-15.5, -21.5],
      }
    ];

    placemarks.forEach(function(item){
      var obj = new ymaps.Placemark(
          item.coords,
          {},
          {
            iconLayout: 'default#image',
            iconImageHref: item.icon,
            iconImageSize: item.icon_size,
            iconImageOffset: item.icon_offset,
          }
      );
      myMap.geoObjects.add(obj);
    });
  };
});