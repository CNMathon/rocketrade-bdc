export class ResponseBody<T = any> {
  constructor(public code: string, public message: string, public data: T) {}
}
