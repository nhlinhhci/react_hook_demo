import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function UseEffectDemo(props) {
  const [number, setNumber] = useState(1);
  //Hook thay thế cho lifeCycle ComponentDidMount
  useEffect(() => {
    //Tự động kích hoạt và chạy lần đầu tiên
    //Call api
    //Sử dụng carousel, thư viện khác...
    console.log("componentDidMount");
    return () => {
      //Hàm này sẽ thực thi trước khi component mất khỏi giao diện
      console.log("componentWillUnmount");
    };
  }, []);
  useEffect(() => {
    //Gọi sau mỗi lần render kể cả lần đầu tiên
    console.log("Thay thế 2 lifecycle componentDidMount và componentDidUpdate");
  });
  useEffect(() => {
    //Gọi sau mỗi lần render kể cả lần đầu tiên
    console.log("componentDidUpdate bởi 1 state nào đó");
    //Hạn chế setState
  }, [number]);
  return (
    <div>
      {/* useEffect */}
      use effect
      <h1>{number}</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
