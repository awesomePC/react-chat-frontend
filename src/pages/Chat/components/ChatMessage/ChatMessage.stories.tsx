import React from "react";
import ChatMessage from "./ChatMessage";

export default {
  title: "pages/Chat/components/ChatMessage",
  component: ChatMessage,
};

const defaultMessage = {
  text: "Yo!",
  isSent: false,
  username: "goooseman",
  createdAt: new Date(),
  status: "none",
} as const;

export const withRecievedMessage = (): React.ReactNode => (
  <ChatMessage {...defaultMessage} />
);

export const withSentMessage = (): React.ReactNode => (
  <ChatMessage {...defaultMessage} isSent />
);

export const withSentMessageInStatusRecieved = (): React.ReactNode => (
  <ChatMessage {...defaultMessage} isSent status="receivedByServer" />
);

const yesterday = new Date(Date.now() - 60 * 60 * 24 * 1000);

export const withRecievedYesterdayMessage = (): React.ReactNode => (
  <ChatMessage {...defaultMessage} createdAt={yesterday} />
);
