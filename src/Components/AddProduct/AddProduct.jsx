
import React, { useContext, useEffect, useState } from "react";
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';

import { FileInput, Label } from "flowbite-react";
import MyContext from "../../context/myContext";

export const AddProduct = () => {
 const {
  imgFiles,
    uploadFiles,
  keyFeatures,
  progress,
  handleKeyFeaturesChange} = useContext(MyContext)
  const [productName, setProductName] = useState("")
  const [productCategory, setProductCategory] = useState("")
  const [productprice, setProductPrice] = useState(0)

  

  
  
  // useEffect(()=>{
  //   console.log(imgFiles)
  // },[imgFiles])
  const handleSummit = (e) => {
    const productInfo = {
      productName,
      productCategory,
      productprice
    }
    e.preventDefault();
    uploadFiles(imgFiles, productInfo)

    // if (imgFiles) {
    //   // start upload
    //   uploadFiles(imgFiles);
      
    //   // console.log(imgFile)
    // }
    // setImgFiles([]);
  };
  return (
    <div>
      <div className="mt-40 flex justify-between">
        <div className="lg:block hidden lg:w-1/6 border">sidebar</div>

        <div className="lg:w-5/6  w-full border">
          <form onSubmit={handleSummit}>
            <p>Add New Product</p>
            <div className="sm:flex justify-center">
              <div className="sm:w-3/5 w-full border">
                <p>General Information</p>
                <p>Product Name</p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered sm:w-full"
                  onChange={(e)=>setProductName(e.target.value)}
                  value={productName}

                />
                <p>Product Description</p>
                <textarea
                  className="textarea textarea-bordered sm:w-full h-[30vh]"
                  placeholder="Bio"
                  value={keyFeatures}
                  onChange={handleKeyFeaturesChange}
                ></textarea>
                <div className="flex ">
                  <div className="w-1/2 border">
                    <p>Category</p>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered sm:w-full"
                      value={productCategory}
                      onChange={(e)=>setProductCategory(e.target.value)}
                    />
                  </div>

                  <div className="w-1/2 border">
                    <p>Price</p>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered sm:w-full"
                      onChange={(e)=>setProductPrice(e.target.value)}
                      value={productprice}

                    />
                  </div>
                </div>
              </div>
              <div className="sm:w-[240px] w-full ">
              <p className="text-xs font-light text-center text-sub2 px-2">Kindly Select Different Images Otherwise it won't upload</p>
                <div className="m-5">
                
                  <div className="rounded-xl bg-yellow-300 ">
                    <ImgField
                   showText={true}
                   imgNo={1}
                    />
                  </div>
                  <div className="flex my-5 ">
                    <div className="w-1/3">
                      <ImgField
                       showText={false}
                       imgNo={2}
                       
                      />
                    </div>
                    <div className="w-1/3">
                      <ImgField
                        showText={false}
                        imgNo={3}
                      />
                    </div>
                    <div className="w-1/3">
                      <ImgField
                        showText={false}
                        imgNo={4}
                      />
                    </div>
                  </div>
                  <button
                    type="summit"
                    onClick={handleSummit}
                    className={`btn btn-success text-white w-full gap-3`}
                  >
                    Summit
                  </button>
                </div>
                {/* <input
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                  onChange={handleFileChange}
                /> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export function ImgField({ showText, imgNo}) {
  const {
    imgFiles,
    setImgFiles,
    handleFilesChange,
    uploadFiles,
    handleUpload,
    imgFile,
    error,
    uploadFile,
    url,
    handleFileChange} = useContext(MyContext)
  useEffect(()=>{
    // console.log(imgFiles)
    console.log(imgFiles)
  },[imgFiles,url])
  
  return (
    <div className="w-full">
     
      <Label
        htmlFor="dropzone-file"
        className="flex w-full h-0 shadow-lg aspect-w-1 aspect-h-1 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 "
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          {!imgFiles[imgNo-1] ? <svg
            className={`  text-gray-500 dark:text-gray-400 h-24 w-24`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>: <span className="text-gray-500"><CloudDoneOutlinedIcon /></span>}
          {showText && !imgFiles[imgNo-1] && (
            <div className="">
              <p className=" text-center mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
          )}
        </div>
        <FileInput
          id="dropzone-file"
          className="hidden"
          onChange={(e)=>{
            handleFilesChange(e)
            // console.log(imgFiles)
            // uploadFile(e.target.files[0])
            // console.log(url)

          }}
        />
      </Label>
    </div>
  );
}
