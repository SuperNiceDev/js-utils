import rad from "../number/rad";

// https://gist.github.com/arkamedus/3a7227ce3d6afabec4edde21a59fcb1b

export const findNearestMarker = (markerList, lat, lng) => {
  const R = 6371; // radius of earth in km
  const distances = [];
  let closest = -1;
  markerList;
  for (let k = 0; k < markerList.length; k++) {
    const mlat = markerList[k].lat;
    const mlng = markerList[k].lng;
    const dLat = rad(mlat - lat);
    const dLong = rad(mlng - lng);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(lat)) *
        Math.cos(rad(lat)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    distances[k] = d;
    if (closest == -1 || d < distances[closest]) {
      closest = k;
    }
  }

  // return markerList[closest];
  return closest;
};

export const findNearestMarkerByAddress = (
  google,
  markerList,
  address,
  callback
) => {
  let lat = "";
  let lng = "";
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: address }, (results, status) => {
    if (status === google.maps.GeocoderStatus.OK) {
      lat = results[0].geometry.location.lat();
      lng = results[0].geometry.location.lng();
      const nearestMarker = findNearestMarker(markerList, lat, lng);
      // console.log("findNearestMarkerByAddress() lat: ", lat);
      // console.log("findNearestMarkerByAddress() lng: ", lng);
      // console.log(
      //   "findNearestMarkerByAddress() nearestMarker: ",
      //   nearestMarker
      // );
      callback(nearestMarker);
    } else {
      callback(null);
    }
  });
};

export const getMarkerByAddress = (google, address) =>
  new Promise((resolve, reject) => {
    const onCallback = (evt) => {
      // console.log("getMarkerByAddress(): onCallback() evt: ", evt);
      if (!evt) {
        reject();
      } else {
        const address = evt?.[0]?.formatted_address;
        const lat = evt?.[0]?.geometry?.location.lat();
        const lng = evt?.[0]?.geometry?.location.lng();
        const latLng = {
          address,
          lat,
          lng,
        };
        resolve(latLng);
      }
    };

    try {
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address: address }, (results, status) => {
        // console.log("getMarkerByAddress(): results", results);
        // console.log("getMarkerByAddress(): status", status);

        if (status === google.maps.GeocoderStatus.OK) {
          onCallback(results);
        } else {
          onCallback(null);
        }
      });
    } catch (err) {
      onCallback(null);
    }
  });
