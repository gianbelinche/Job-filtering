import React from "react";
import "antd/dist/antd.css";
import { Card, Tag, Row, Col, Divider, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export default function Filter(props) {
  const [hovereds, setHovereds] = React.useState([]);

  React.useEffect(() => {
    setHovereds(props.tags.map((tag) => false));
  }, [props.tags]);

  const changeHover = (index) => {
    var hovereds_copy = [...hovereds];
    hovereds_copy[index] = !hovereds_copy[index];
    setHovereds(hovereds_copy);
  };
  return (
    <Card style={{ width: "60%" }}>
      <Card.Grid style={{ width: "100%" }}>
        <Row style={{ justifyContent: "space-between" }}>
          <Row>
            {props.tags.map((tag, index) => (
              <Row>
                <Tag color="hsl(180, 52%, 96%)" style={{ borderRadius: "5px" }}>
                  <h2 style={styles.name}>{tag}</h2>
                </Tag>
                <Button
                  icon={<CloseOutlined style={{ fontSize: 20 }} />}
                  style={
                    hovereds[index]
                      ? styles.button_hovered
                      : styles.button_not_hovered
                  }
                  onMouseEnter={() => changeHover(index)}
                  onMouseLeave={() => changeHover(index)}
                  onClick={() => props.onRemove(tag)}
                />
                <Divider type="vertical"></Divider>
              </Row>
            ))}
          </Row>
          <Button type="link" onClick={props.onClear}>
            <h3 style={styles.underlined}>Clear</h3>
          </Button>
        </Row>
      </Card.Grid>
    </Card>
  );
}

const styles = {
  button_hovered: {
    color: "hsl(180, 52%, 96%)",
    background: "hsl(180, 14%, 20%)",
    borderRadius: "5px",
  },
  button_not_hovered: {
    color: "hsl(180, 52%, 96%)",
    background: "hsl(174, 27.62%, 61.18%)",
    borderRadius: "5px",
  },
  name: {
    fontFamily: "League Spartan",
    color: "hsl(174, 27.62%, 61.18%)",
    fontWeight: 500,
    marginTop: 5,
  },
  underlined: {
    textDecoration: "underline",
    fontFamily: "League Spartan",
    color: "hsl(174, 27.62%, 61.18%)",
    fontWeight: 500,
  },
};
