function initMap() {
    const mlh = { lat: 40.73931515525687, lng: -73.98393552056945};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: 50.82422484954932, lng: 15.264537643481063 }
    })

    const locations = [
        { lat: 55.8821110203132, lng: -4.253081570938733 }, // Glasgow, Scotland
        { lat: 55.75643481976032, lng: 37.633117406367866 }, // Moscow, Russia
        { lat: 47.5173125506214, lng: 19.04670126858636 }, // Budapest, Hungary
        { lat: 52.50912801962397, lng: -1.8815679862283017}, // Birmingham, England
        { lat: 53.397845338560614, lng: -1.4706420706291747 }, // Sheffield, England
        { lat: 54.77836878358721, lng: -1.5858841975979692 } // Durham, England
    ];
      
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    new MarkerClusterer(map, markers, {
        imagePath: "m"
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