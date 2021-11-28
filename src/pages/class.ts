import { RcFile } from "antd/lib/upload";

export class UploadFile {
  public name: string = "";
  public uid: string = "";
  constructor() {}
  getBaseIf(manage: UploadManage, id: string) {
    console.log(id, "id=====");
    manage.setExternalAttr(id, this);
    console.log(this);
    return this;
  }
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
    this.cache[id] = null;
    delete this.cache[id];
  }
  setExternalAttr(id: string, uploadFile: UploadFile) {
    const obj = this.cache[id];
    if (!obj) {
      return null;
    }
    for (const key in obj) {
      // @ts-ignore
      uploadFile[key] = obj[key];
    }
  }
}
