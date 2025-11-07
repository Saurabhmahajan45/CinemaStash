import axios from "axios";
import { API_BASE_URL } from "../constants/APIConstants";


const BOOKING_API_URL = `${API_BASE_URL}/booking`;

export const getAllBookings = async () => {
  return await axios.get(BOOKING_API_URL);
};

export const getBookingsByUserId = async (user_id) => {
  return await axios.get(`${BOOKING_API_URL}/user/${user_id}`);
};

export const createBooking = async (bookingData) => {
  return await axios.post(BOOKING_API_URL, bookingData);
};

export const updateBookingStatus = async (booking_id, status) => {
  return await axios.put(`${BOOKING_API_URL}/${booking_id}`, { status });
};

export const deleteBooking = async (booking_id) => {
  return await axios.delete(`${BOOKING_API_URL}/${booking_id}`);
};
