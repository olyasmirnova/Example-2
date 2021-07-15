function initMap() {
    var coordinates = {lat: 38.7494583, lng: 77.0384653},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates
        }),
    
        image = '../images/marker.png',
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: image
        });}