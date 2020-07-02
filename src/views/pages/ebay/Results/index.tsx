import React, { useContext } from "react";
import { Form, Input, Button, Card, Row, Col, Typography, Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import EbayProvider from "../../../contexts/EbayProvider";
import { withStyles, Theme } from "../../../theme/Style";
import { $ReactBaseProps } from "../../../../types";

const EbayResults: React.FC<$ReactBaseProps> = ({
  classes,
}: $ReactBaseProps) => {
  const { results, searchData } = useContext(EbayProvider.context);
  const onFinish = async (values) => {
    await searchData(values.keywords);
  };

  return (
    <div>
      <div className={classes.form}>
        <Typography.Title level={3}>Search Results</Typography.Title>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
          layout="inline"
        >
          <Form.Item name="keywords">
            <Input
              //prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Keywords"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Search
            </Button>
          </Form.Item>
        </Form>
      </div>

      {results && results.items && results.items[0].searchResult && (
        <Row gutter={[Theme.gutter, Theme.gutter]}>
          {results.items[0].searchResult[0].item.map((item, idx) => (
            <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} key={idx}>
              <Card
                className={classes.card}
                hoverable
                cover={
                  <img
                    className={classes.cardImg}
                    alt={item.title}
                    src={item.galleryURL}
                  />
                }
              >
                {item.condition && (
                  <Tag>{item.condition[0].conditionDisplayName}</Tag>
                )}
                {item.shippingInfo[0].shippingType[0] === "Free" && (
                  <Tag>Free Shipping</Tag>
                )}
                {item.returnsAccepted[0] && <Tag>Free Returns</Tag>}
                {item.sellerInfo[0].topRatedSeller[0] && <Tag>Top Seller</Tag>}
                <div>{item.title}</div>
                <div>{item.subtitle}</div>

                <Row>
                  <Col>
                    <div>
                      {item.listingInfo[0].buyItNowAvailable && (
                        <Tag>Buy Now!</Tag>
                      )}
                    </div>
                    <div>
                      <Tag icon={<EyeOutlined />}>
                        {item.listingInfo[0].watchCount}
                      </Tag>
                    </div>
                  </Col>
                  <Col>
                    <div>Seller:</div>
                    <div>{item.sellingStatus[0].sellingState}</div>
                    <div>
                      {item.sellingStatus[0].convertedCurrentPrice.__value__}
                    </div>
                    <div>{item.sellerInfo[0].feedbackRatingStar}</div>
                    <div>{item.sellerInfo[0].feedbackScore}</div>
                    <div>{item.sellerInfo[0].positiveFeedbackPercent}</div>
                    <div>{item.sellerInfo[0].sellerUserName}</div>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

const styles = (_theme) => ({
  layout: {
    color: "white",
  },
  container: {
    color: "#f00",
    padding: "20px",
  },
  padding: { padding: "0 4px" },
  form: { marginBottom: _theme.gutter },
  card: {},
  cardImg: { objectFit: "none", height: "240px" },
});

export default withStyles(styles)(EbayResults);
