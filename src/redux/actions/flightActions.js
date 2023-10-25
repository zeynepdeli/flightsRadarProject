import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../helpers/constants";
import axios from "axios";
import flightSlice from "../slices/flightSlice";

export const getFlights = createAsyncThunk(
  "flights/getflight",

  async () => {
    //asenkron

    const res = await axios.request(options);

    const newData = res.data.aircraft.map((flight) => ({
      id: flight[0],
      code: flight[1],
      lat: flight[2],
      lng: flight[3],
    }));
    console.log(newData);
    //return etme

    return newData;
  }
);
