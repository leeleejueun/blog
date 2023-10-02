/*eslint-disable*/
// warrning메세지 없애기

import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  let post = "강남 우동 맛집";
  // let [글제목1, b1] = useState("남자 코트 추천");
  // let [글제목2, b2] = useState("강남 우동 맛집");
  // let [글제목3, b3] = useState("파이썬독학");
  let [글제목, 글제목변경] = useState([
    "우리는 하나다",
    "드디어 콘센트 자리 GET",
    "이제는 노는것보다 공부",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          글제목변경(copy.sort());
        }}
      >
        가나다순정렬
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        변경
      </button>
      {/* <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h4>
        <p>9월 22일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>9월 21일 발행</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>9월 22일 발행</p>
      </div> */}
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>9월 21일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        글발행
      </button>

      {modal == true ? (
        <Modal
          color="yellow"
          글제목={글제목}
          글제목변경={글제목변경}
          title={title}
        />
      ) : null}
      <Modal2></Modal2>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = "여자코트 추천";
          props.글제목변경(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "lee",
      age: 26,
      // 하잉
    };
  }
  render() {
    return (
      <div>
        안녕{this.state.age}
        <button
          onClick={() => {
            this.setState({ age: 25 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
