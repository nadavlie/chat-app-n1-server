import { Message } from "../types/message";
import { mockUsers } from "../assets/mockUsers";

const endpoint = "http://localhost:3001";

export async function getMessages() {
  const res = await fetch(`${endpoint}/mockMessages`);
  return await res.json();
}

export async function getUsers() {
  // todo: replace this with fetch to get the user list from the server
  const RES = await fetch(`${endpoint}/mockUsers`);
  return await RES.json();
}

/**
 * GET request to get the full details of a user
 **/
export async function getUserDetails(userId: number) {
  const res_user_details = await fetch(`${endpoint}/mockUsers/${userId}`);
  return (await res_user_details.json())[0];
}

/**
 * POST request to add a message. The message contains: id, body, timestamp, authorId
 **/
export async function addNewMessage(message: Message) {
  // todo: implement sending a new message to the server
  const body = JSON.stringify(message);
  const method = "POST";
  const headers = {
    "content-type": "application/json",
  };
  return await fetch(`${endpoint}/mockMessages`, { method, headers, body });
}

/**
 * POST request to change the user's like of a message
 **/
export async function changeMessageLikes(
  messageId: number,
  userId: number,
  like: boolean
) {
  // todo: implement sending a request to change the like of a message by the user
  const body = JSON.stringify({ userId, like });
  const method = "POST";
  const headers = {
    "content-type": "application/json",
  };
  return await fetch(`${endpoint}/mockMessages/${messageId}`, {
    method,
    headers,
    body,
  });
}
