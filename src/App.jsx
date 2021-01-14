import React from "react";
import defaultDataset from "./dataset";
import "./css/styles.css";
import { AnswersList, Chats, FormDialog } from "./components/index";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
    };
    this.displayNextQuestion = this.displayNextQuestion.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  displayNextQuestion = (nextQuestionsId) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionsId].question,
      type: "question",
    });
    this.setState({
      answers: this.state.dataset[nextQuestionsId].answers,
      chats: chats,
      currentId: nextQuestionsId,
    });
  };
  selectAnswer = (selectedAnswer, nextQuestionsId) => {
    switch (true) {
      case nextQuestionsId === "init":
        setTimeout(() => this.displayNextQuestion(nextQuestionsId), 500);
        break;
      case nextQuestionsId === "contact":
        this.handleClickOpen();
        break;
      default:
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: "answer",
        });
        this.setState({
          chats: chats,
        });
        setTimeout(() => this.displayNextQuestion(nextQuestionsId), 500);
        break;
    }
  };
  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId);
  }
  componentDidUpdate() {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }
  render() {
    return (
      <section className="all">
        <div className="contents">
          <Chats chats={this.state.chats} />
          <AnswersList
            answers={this.state.answers}
            select={this.selectAnswer}
          />
          <FormDialog
            open={this.state.open}
            handleClose={this.handleClose}
            submitForm={this.submitForm}
          />
        </div>
      </section>
    );
  }
}
