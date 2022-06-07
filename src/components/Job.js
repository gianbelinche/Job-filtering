import React from "react";
import "antd/dist/antd.css";
import { Card, Image, Row, Col, Divider } from "antd";
import Logo from "../images/eyecam-co.svg";
import NewBadge from "./NewBadge";
import FeaturedBadge from "./FeaturedBadge";

export default function Job() {
  return (
    <Card>
      <Card.Grid>
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
            <h2 style={styles.title}>Fullstack Engineer</h2>
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
  title: {
    fontFamily: "League Spartan",
    color: "hsl(180, 14%, 20%)",
    fontWeight: 900,
  },
  name: {
    fontFamily: "League Spartan",
    color: "hsl(174, 27.62%, 61.18%)",
    fontWeight: 500,
  },
};
