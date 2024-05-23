import React, { useState } from "react";
import MyContext from "./myContext";
import { storage , fireDB} from "../firebase/firebaseConfig";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

function MyState(props) {
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [hall, setHall] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [college, setCollege] = useState('');
  const [postalCode, setPostalCode] = useState('');


  const [loading, setLoading] = useState(false);

  const [keyFeatures, setKeyFeatures] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState([]);
  const imgTypes = ["images/png", "image/jpeg "];

  const uploadFile = async(file) => {
    console.log("upload started");
    if (!file) return;
    console.log(file);
    const fileId = uuidv4();
    const fileType = file.type.split("/")[1];

    const storageRef = ref(storage, `images/${fileId}.${fileType}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        // console.log(progress === 100);
      },
      (error) => {
        setError(error);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL)
          console.log("url: " ,url)
          console.log("File available at", downloadURL);
          setProgress(0);
        //   return downloadURL;
        });
      }
    );
  };
  const handleKeyFeaturesChange = (e) => {
    const value = e.target.value;
    setKeyFeatures(value);
    console.log(value.split("\n"));
  };
//   useEffect(() => {
//     console.log("imgFile", imgFile);
//   }, [imgFile]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      setImgFile(e.target.files[0]);
      // console.log("imgFile",imgFile)
    }
  };
  const addProduct =async(productInfo, photoUrl)=>{
        // check if not empty using if return toastify
        try{
            const productRef = collection(fireDB, "products");
            const prodcut = {
                id : uuidv4(),
                title: productInfo.productName,
                category : productInfo.productCategory,
                price : productInfo.productprice,
                img : photoUrl

            }
            await addDoc(productRef,prodcut )
            toast.success("Product Added Succesfully")
        }
        catch(error){
            return toast.error(error.message)

        }
  }


  const [imgFiles, setImgFiles] = useState([]);

  const handleFilesChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setImgFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const uploadFiles = (files,productInfo) => {
    files.forEach((file) => {
      if (!file) return;
      console.log(file);
      const fileId = uuidv4();
      const fileType = file.type.split("/")[1];

      const storageRef = ref(storage, `images/${fileId}.${fileType}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress((prevProgress) => ({
            ...prevProgress,
            [file.name]: progress,
          }));
          // console.log(progress === 100);
        //   store to db
        
        },
        (error) => {
          setError(error);
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl((prevUrls) => [...prevUrls, downloadURL]);

            console.log("File available at", downloadURL);
            setProgress((prevProgress) => ({
              ...prevProgress,
              [file.name]: 0,
            }));
          });
          
        }
      );
    });
    addProduct(productInfo, url)
  };

  const handleUpload = () => {
    uploadFiles(imgFiles);
  };
  const value = {
    firstName,
    lastName,
    phoneNumber,
    roomNo,
    hall,
    city,
    state,
    college,
    postalCode,
    setFirstName,
    setLastName,
    setPhoneNumber,
    setRoomNo,
    setHall,
    setCity,
    setState,
    setCollege,
    setPostalCode,
    imgFiles,
    setImgFiles,
    handleFilesChange,
    uploadFiles,
    handleUpload,

    loading,
    setLoading,
    keyFeatures,
    setKeyFeatures,
    imgFile,
    setImgFile,
    progress,
    setProgress,
    error,
    setError,
    url,
    setUrl,
    imgTypes,
    uploadFile,
    handleKeyFeaturesChange,
    handleFileChange


  }

  return (
    <MyContext.Provider value={value}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
