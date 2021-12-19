import Header from "../HeaderAccount";
import Body from "./InviteBody";
// import styles from "./InvitePage.module.css";

const InvitePage = (props) => {
  return (
    <div>
      <Header user={props.user} />
      <Body />
    </div>
  );
};

export default InvitePage;
