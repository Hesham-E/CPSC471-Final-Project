import styles from "./EventDesc.module.css";

const EventDesc = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <span className="span-1">{"Name: " + props.event.Event_Name}</span>
        <span className="span-2">Event_ID: 324169</span>
      </div>
      <span className="span-3">
        Donec dignissim lacus sit amet volutpat mattis. Cras facilisis mauris
        nunc, id rhoncus ante posuere eu. In hac habitasse platea dictumst.
        Curabitur sollicitudin aliquam sem, in ullamcorper sem pretium vel.
        Morbi non eros condimentum quam faucibus pharetra sed cursus sem. Nullam
        sit amet tincidunt orci. Proin non condimentum purus. Sed justo sapien,
        blandit et odio nec, vestibulum hendrerit ante. Nunc pellentesque rutrum
        libero, ac aliquam sem ullamcorper vitae. Suspendisse fermentum neque
        magna, ut laoreet enim auctor quis. In placerat, mi sit amet vestibulum
        pellentesque, purus ante lacinia metus, at venenatis tortor velit ut
        libero. Suspendisse dignissim tellus id ex varius vehicula. Mauris et
        libero vitae magna placerat volutpat. Phasellus luctus quis urna ut
        mollis.
      </span>
      <div className={styles.div1}>
        <span className="span-4">Time: 7:00-11:00AM</span>
        <span className="span-5">Date: October 23, 2022</span>
      </div>
      <span className="span-6">
        Location: 288 Collegiate Blvd NW, Calgary, AB T2N 1N4
      </span>
      <div className={styles.invitedUsers}>
        <span className="span-6">Invited Users:</span>
        <span className="span-6">- jeromy.frank@gmail.com</span>
        <span className="span-6">- habibi.iheartyou@gmail.com</span>
        <span className="span-6">- weidai@icloud.com</span>
        <span className="span-6">- carmena@outlook.com</span>
        <span className="span-6">- dbrobins@outlook.com</span>
        <span className="span-6">- mglee@optonline.net</span>
      </div>
      <span className="span-6">Date Created: November 24, 2021</span>
    </div>
  );
};

export default EventDesc;
