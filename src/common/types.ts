export interface OB11Config {
  httpPort: number
  httpHosts: string[]
  httpSecret?: string
  wsPort: number
  wsHosts: string[]
  enableHttp?: boolean
  enableHttpPost?: boolean
  enableWs?: boolean
  enableWsReverse?: boolean
  messagePostFormat?: 'array' | 'string'
  enableHttpHeart?: boolean
  enableQOAutoQuote: boolean  // 快速操作回复自动引用原消息
}
export interface CheckVersion {
  result: boolean
  version: string
}
export interface Config {
  enableLLOB: boolean
  ob11: OB11Config
  token?: string
  heartInterval?: number // ms
  enableLocalFile2Url?: boolean // 开启后，本地文件路径图片会转成http链接, 语音会转成base64
  debug?: boolean
  reportSelfMessage?: boolean
  log?: boolean
  autoDeleteFile?: boolean
  autoDeleteFileSecond?: number
  ffmpeg?: string // ffmpeg路径
  musicSignUrl?: string
  ignoreBeforeLoginMsg?: boolean
}

export interface LLOneBotError {
  httpServerError?: string
  wsServerError?: string
  ffmpegError?: string
  otherError?: string
}

export interface FileCache {
  fileName: string
  filePath: string
  fileSize: string
  fileUuid?: string
  url?: string
  msgId?: string
  elementId: string
  downloadFunc?: () => Promise<void>
}
