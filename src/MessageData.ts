export default interface MessageData {
  read(message: string): Promise<string>
}
