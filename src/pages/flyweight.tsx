import { FC, useRef, useState } from "react";
import * as React from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadFile, UploadManage } from "./class";

const FlyWeight: FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const manageRef = useRef(new UploadManage());

  return (
    <>
      <Upload
        fileList={[]}
        directory
        beforeUpload={(file, files) => {
          const manage = manageRef.current;
          manage.add(file.uid, file);
          const uploadFiles = files.map((item) => {
            return new UploadFile(item.name, item.uid);
          });
          setFileList([...uploadFiles]);
          console.log("ma", manage);
          return false;
        }}
      >
        <Button icon={<UploadOutlined />}>Upload Directory</Button>
      </Upload>
      {fileList.map((item) => {
        return (
          <div key={item.id}>
            {item.name}
            <a
              href="#"
              onClick={() => {
                const manage = manageRef.current;
                manage.del(item.id);
                const index = fileList.findIndex((findItem) => {
                  return item.id === findItem.id;
                });
                if (index !== -1) {
                  fileList.splice(index, 1);
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
