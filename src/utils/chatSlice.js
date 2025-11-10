import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // Add new message to the end (newest at the end)
      state.message.push(action.payload);
      // Keep only the most recent LIVE_CHAT_COUNT messages by removing oldest entries
      if (state.message.length > LIVE_CHAT_COUNT) {
        state.message.shift();
      }
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
