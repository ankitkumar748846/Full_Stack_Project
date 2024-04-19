import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function EditProfile() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    previewImage: "",
    fullName: "",
    avatar: undefined,
    userId: useSelector((state) => state?.auth?.data?._id),
  });
}
