function initMap() {
    const mlh = { lat: 40.73931515525687, lng: -73.98393552056945};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: mlh
    })
    const marker = new google.maps.Marker({
        position: mlh,
        map: map
    })
}

/*


    Major League Hacking PBC, Inc.
    P.O. #438
    149 East 23rd Street
    New York, New York 10159
    United States

    40.73931515525687, -73.98393552056945


*/