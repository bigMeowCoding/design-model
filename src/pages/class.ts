import { RcFile } from "antd/lib/upload";

export class UploadFile {
  constructor(public name: string, public id: string) {}
}

export class UploadManage {
  cache: { [key: string]: RcFile | null } = {};
  add(id: string, file: RcFile) {
    if (this.cache[id]) {
      return;
    }
    this.cache[id] = file;
  }
  del(id: string) {
    debugger
    this.cache[id] = null;
    delete this.cache[id];
  }
}
