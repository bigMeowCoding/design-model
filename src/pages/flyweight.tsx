import * as React from "react";
import { FC, useCallback, useRef, useState } from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadFile, UploadManage } from "./class";

const FlyWeight: FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const manageRef = useRef(new UploadManage());
  const uploadFileRef = useRef(new UploadFile());

  const getId = useCallback((index: number) => {
    return Object.keys(manageRef.current.cache)[index];
  }, []);

  return (
    <>
      <Upload
        fileList={[]}
        directory
        beforeUpload={(file, files) => {
          const manage = manageRef.current;
          manage.add(file.uid, file);
          const uploadFiles = files.map(() => {
            return uploadFileRef.current;
          });
          setFileList([...uploadFiles]);
          console.log("ma", manage);
          return false;
        }}
      >
        <Button icon={<UploadOutlined />}>Upload Directory</Button>
      </Upload>
      {fileList.map((item, index) => {
        return (
          <div key={item.getBaseIf(manageRef.current, getId(index)).uid}>
            {item.getBaseIf(manageRef.current, getId(index)).name}
            <a
              href="#"
              onClick={() => {
                const manage = manageRef.current;
                manage.del(getId(index));
                const findIndex = fileList.findIndex((findItem) => {
                  return item.uid === findItem.uid;
                });
                if (findIndex !== -1) {
                  fileList.splice(findIndex, 1);
                  setFileList([...fileList]);
                }
                console.log(manage);
              }}
            >
              删除
            </a>
          </div>
        );
      })}
    </>
  );
};

export default FlyWeight;
