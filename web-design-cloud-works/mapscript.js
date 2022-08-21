
content = document.querySelector('.popup-content');
container = document.querySelector('#popup');

const lon = -84.50655953884284;
const lat = 39.13983094371144;



const overlay = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
            duration: 250,
        },
    

});




//create map
const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    overlays: [overlay],

    view: new ol.View({
        center: ol.proj.fromLonLat([lon, lat]),
        zoom: 13
    })

})


// temp



// hover action on map

map.on('pointermove', function(evt){
    var feature = map.getFeaturesAtPixel(evt.pixel)[0];
    if (feature){
        const coordinate = feature.getGeometry().getCoordinates();
            var plotat = coordinate;
            content.innerHTML = `
            <p> Info about the works
            </p> lincoln heights 
            
        `;
            
            overlay.setPosition(plotat);
            
        }
        
        /*
    else {
        overlay.setPosition(undefined);
        content.innerHTML = '';
    }
*/
});

map.on('click', function(evt){
    overlay.setPosition(undefined);
    content.innerHTML = '';
})



// add all markers with these


var markers = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: 'marker.png'
      })
    })
  });

  map.addLayer(markers);

  var marker1 = new ol.Feature(
    new ol.geom.Point(
        ol.proj.fromLonLat([lon+0.01, lat])
    )
  );
  var marker2 = new ol.Feature(
    new ol.geom.Point(
        ol.proj.fromLonLat([lon, lat])
    )
  );
  var marker3 = new ol.Feature(
    new ol.geom.Point(
        ol.proj.fromLonLat([-84.45679147952868, 39.24460016109023])
        //lincoln heights
    )
  );
  var marker4 = new ol.Feature(
    new ol.geom.Point(
        ol.proj.fromLonLat([-84.37422521313731, 39.50877149691481])
        //middletown
    )
  );
  var marker5 = new ol.Feature(
    new ol.geom.Point(
        ol.proj.fromLonLat([-84.56559798940535, 39.104909829770286])
        //east price hill
        )
  );
  var marker6 = new ol.Feature(
    new ol.geom.Point(
        ol.proj.fromLonLat([-84.55414245050707, 39.10580274604297 ])
        //lower price hill
        )

  );
  var marker7 = new ol.Feature(
    new ol.geom.Point(
        ol.proj.fromLonLat([-84.54920129365286, 39.233774739599 ])
        //west end
        )
  );
  var marker8 = new ol.Feature(
    new ol.geom.Point(
        ol.proj.fromLonLat([ -84.52699803934117, 39.11255341887697])
        //mt healthy
        )
  );


  markers.getSource().addFeature(marker1);
  markers.getSource().addFeature(marker2);
  markers.getSource().addFeature(marker3);
  markers.getSource().addFeature(marker4);
  markers.getSource().addFeature(marker5);
  markers.getSource().addFeature(marker6);
  markers.getSource().addFeature(marker7);
  markers.getSource().addFeature(marker8);

