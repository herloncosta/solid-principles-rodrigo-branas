import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import MessageData from './MessageData'

export default class MessageDataFile implements MessageData {

  async read(language: string): Promise<string> {
    const filePath = resolve('src', 'messages', `${language}.txt`)
    const message = await readFile(filePath, 'utf-8')

    return message
  }

}
