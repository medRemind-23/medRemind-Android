import { doc, setDoc, getDoc } from "firebase/firestore";

const postData = (user_id, db, medicine, duration, time) => {
  const docRef = doc(db, "Patient", user_id);
  const docSnap = getDoc(docRef).then((res) => {
    console.log(res.data().pres);
    let datas = res.data();
    const newDatas = {
      prescription: medicine,
      duration: duration,
      time: time,
    };
    datas.pres = [...datas, newDatas];
  });
  return setDoc(docRef, datas);
};

export default postData;
