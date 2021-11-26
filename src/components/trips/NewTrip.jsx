import Header from "../account/HeaderAccount";
import Button from "../parts/Button";
import "./NewTrip.css";

const NewTrip = () => {
  return (
    <div>
      <Header />
      <div className="user-sign-up">
        <div className="background-rectangle" />
        <div className="question-bar">
          <p className="question-title">Name</p>
          <div className="form-field" />
        </div>
        <div className="question-bar">
          <p className="question-title">Description</p>
          <div className="form-field" />
        </div>
        <div className="question-bar">
          <p className="question-title">Date</p>
          <div className="form-field" />
        </div>
        <div className="question-bar">
          <p className="question-title">Time</p>
          <div className="form-field" />
        </div>
        <div className="question-bar">
          <p className="question-title">Location</p>
          <div className="form-field" />
        </div>
        <div className="question-bar">
          <p className="question-title">Send Invitation</p>
          <div className="form-field" />
        </div>
        <div className="question-bar">
          <p className="question-title">Private or Public?</p>
          <div className="form-field-trueorfalse" />
        </div>

        <Button className="button-button" />
      </div>
    </div>
  );
};

export default NewTrip;
