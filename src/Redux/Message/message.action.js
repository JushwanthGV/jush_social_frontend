import { api } from "../../config/api";
import {
  CREATE_MESSAGE_REQUEST,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAILURE,
  CREATE_CHAT_REQUEST,
  CREATE_CHAT_SUCCESS,
  CREATE_CHAT_FAILURE,
} from "./message.actionType";
import * as actionType from "./message.actionType";

export const createMessage = (message) => async (dispatch) => {
  dispatch({ type: actionType.CREATE_MESSAGE_REQUEST });

  try {
    const { data } = await api.post(`/api/message`, message);
    console.log("created message", data);
    dispatch({ type: actionType.CREATE_MESSAGE_SUCCESS, payload: data });
  } catch (error) {
    console.log("catch error-------", error);
    dispatch({
      type: actionType.CREATE_MESSAGE_FAILURE,
      payload: error,
    });
  }
};

export const createChat = (chat) => async (dispatch) => {
  dispatch({ type: actionType.CREATE_CHAT_REQUEST });

  try {
    const { data } = await api.post(`/api/chats`, chat);
    console.log("created chat", data);
    dispatch({ type: actionType.CREATE_CHAT_SUCCESS, payload: data });
  } catch (error) {
    console.log("catch chat error-------", error);
    dispatch({
      type: actionType.CREATE_CHAT_FAILURE,
      payload: error,
    });
  }
};

export const getAllChats = (message) => async (dispatch) => {
    dispatch({ type: actionType.GET_ALL_CHAT_REQUEST});
  
    try {
      const { data } = await api.get(`/api/chats/user`, message);
      console.log("get all chat", data);
      dispatch({ type: actionType.GET_ALL_CHAT_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch ALLCHAT error-------", error);
      dispatch({
        type: actionType.GET_ALL_CHAT_FAILURE,
        payload: error,
      });
    }
  };