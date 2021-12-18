import React, { Component } from "react";
import { Stack } from "react-bootstrap";
import "./PublicEventsPage.css";
import image1 from "../pictures/image1.png";
import image2 from "../pictures/image2.png";

class PublicEventsPage extends Component {
  render() {
    return (
      <div className="background">
        <span className="page-title">Events 1-10</span>
        <div className="event-div">
          <Stack direction="horizontal" gap="5" fluid="true">
            <img className="event-image" src={image1} alt="image1" />
            <Stack>
              <span className="event-headers">Organization</span>
              <div className="event-text-background">
                <span className="event-text-descriptors">
                  Orci varius natoque
                </span>
              </div>

              <span className="event-headers">Event Description</span>
              <div className="event-text-background">
                <span className="event-text-descriptors">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum varius lectus vel est mattis, sit amet pulvinar est
                  varius. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus.
                </span>
              </div>

              <span className="event-headers">Event Time & Date</span>
              <Stack direction="horizontal" gap="3">
                <div className="event-text-background">
                  <span className="event-text-descriptors">
                    Time: 5:00-7:00PM
                  </span>
                </div>
                <div className="event-text-background">
                  <span className="event-text-descriptors">
                    Date: February 12, 2023
                  </span>
                </div>
              </Stack>
            </Stack>
          </Stack>
        </div>

        <div className="event-div">
          <Stack direction="horizontal" gap="5">
            <img className="event-image" src={image2} alt="image2" />
            <Stack>
              <span className="event-headers">Organization</span>
              <div className="event-text-background">
                <span className="event-text-descriptors">
                  Orci varius natoque
                </span>
              </div>

              <span className="event-headers">Event Description</span>
              <div className="event-text-background">
                <span className="event-text-descriptors">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum varius lectus vel est mattis, sit amet pulvinar est
                  varius. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus.
                </span>
              </div>

              <span className="event-headers">Event Time & Date</span>
              <Stack direction="horizontal" gap="3">
                <div className="event-text-background">
                  <span className="event-text-descriptors">
                    Time: 5:00-7:00PM
                  </span>
                </div>
                <div className="event-text-background">
                  <span className="event-text-descriptors">
                    Date: February 12, 2023
                  </span>
                </div>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </div>
    );
  }
}

export default PublicEventsPage;
