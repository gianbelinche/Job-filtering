import React from "react";
import "antd/dist/antd.css";
import { Card, Image, Row, Col, Divider } from "antd";
import Logo from "../images/eyecam-co.svg";
import NewBadge from "./NewBadge";
import FeaturedBadge from "./FeaturedBadge";
import JobTag from "./JobTag";

export default function Job() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Card>
      <Card.Grid style={{ width: "50%" }}>
        <Row>
          <Image src={Logo} preview={false}></Image>
          <Divider type="vertical" />
          <Col>
            <Row>
              <h2 style={styles.name}>Eyecam-co</h2>
              <Divider type="vertical" />
              <NewBadge visible={true}></NewBadge>
              <Divider type="vertical" />
              <FeaturedBadge visible={true}></FeaturedBadge>
            </Row>
            <div
              onMouseEnter={() => setHovered(!hovered)}
              onMouseLeave={() => setHovered(!hovered)}
            >
              <h2
                style={
                  hovered ? styles.title_hovered : styles.title_not_hovered
                }
              >
                Fullstack Engineer
              </h2>
            </div>
            <Row>
              <p style={styles.text}>1d ago</p>
              <Divider type="vertical" />
              <p style={styles.text}> . </p>
              <Divider type="vertical" />
              <p style={styles.text}>Full time</p>
              <Divider type="vertical" />
              <p style={styles.text}> . </p>
              <Divider type="vertical" />
              <p style={styles.text}>USA only</p>
            </Row>
          </Col>
          <Divider type="vertical" style={{ width: 100 }} />
          {[1, 2].map(() => (
            <Row style={{ flex: 1 }}></Row>
          ))}
          {[1, 2, 3].map(() => (
            <Row style={{ flex: 1 }}>
              <Divider />
              <JobTag text="FrontEnda"></JobTag>
              <Divider />
            </Row>
          ))}
        </Row>
      </Card.Grid>
    </Card>
  );
}

const styles = {
  text: {
    fontFamily: "League Spartan",
    color: "hsl(180, 14%, 20%)",
    fontSize: "15px",
  },
  title_not_hovered: {
    fontFamily: "League Spartan",
    color: "hsl(180, 14%, 20%)",
    fontWeight: 900,
  },
  title_hovered: {
    fontFamily: "League Spartan",
    color: "hsl(174, 27.62%, 61.18%)",
    fontWeight: 900,
  },
  name: {
    fontFamily: "League Spartan",
    color: "hsl(174, 27.62%, 61.18%)",
    fontWeight: 500,
  },
};
