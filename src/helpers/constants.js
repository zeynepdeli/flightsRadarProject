export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.047182",
    bl_lng: "24.992627",
    tr_lat: "42.705437",
    tr_lng: "44.549525",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "d184942961msh5aa0271b0b74025p1ce405jsndd9f90c3988d",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOptions = {
  headers: {
    "X-RapidAPI-Key": "d184942961msh5aa0271b0b74025p1ce405jsndd9f90c3988d",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
