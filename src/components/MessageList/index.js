import { Message } from "../Message/Message";

export const MessageList = ({ messages }) =>
  messages.map(({ messageText, author }) => (
    <Message text={messageText} author={author} />
  ))