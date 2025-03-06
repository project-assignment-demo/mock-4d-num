import { Col, Row } from "antd";
import Card from "../components/LotteryInfoCard";

const DashBoard = () => {
    return (
      <div className="max-w-[70%] ml-[10%]">
          <Row gutter={[16,24]} justify="center" align="top">
            <Col sm={24} md={12} lg={8} span={24}>
                <Card />
            </Col>
            <Col sm={24} md={12} lg={8} span={24}>
                <Card />
            </Col>
            <Col sm={24} md={12} lg={8} span={24}>
                <Card />
            </Col>
            <Col sm={24} md={12} lg={8} span={24}>
                <Card />
            </Col>
            <Col sm={24} md={12} lg={8} span={24}>
                <Card />
            </Col>
            <Col sm={24} md={12} lg={8} span={24}>
                <Card />
            </Col>
            <Col sm={24} md={12} lg={8} span={24}>
                <Card />
            </Col>
        </Row>
      </div>
    )
}

export default DashBoard;