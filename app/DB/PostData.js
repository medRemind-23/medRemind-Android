import { doc, setDoc, getDoc } from "firebase/firestore";

const postData = (user_id, db, medicine, duration, time) => {
  try {
    const docRef = doc(db, "Patient", user_id);
    getDoc(docRef).then((res) => {
      //console.log(res.data());
      let datas = res.data();
      const newDatas = {
        prescription: medicine,
        duration: duration,
        time: time,
      };
      let newData = [...datas.medicalinfo, newDatas];
      let dat = { Email: datas.Email, medicalinfo: newData };
      console.log(dat);
      return setDoc(docRef, dat);
    });
  } catch (e) {
    console.log("e: ", e);
  }
};

export default postData;
