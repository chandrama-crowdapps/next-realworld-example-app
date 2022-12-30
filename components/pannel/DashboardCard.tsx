import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export default function DashboardCard() {
  const cardData =[
    {
      title:'Total Project',
      para:'',
      value:'20',
      icon:'',
      background:'Primary'
    },
    {
      title:'Total Member',
      para:'',
      value:'10',
      icon:'',
      background:'Success'
    },
    {
      title:'Total Web Project',
      para:'',
      value:'20',
      icon:'',
      background:'Danger'
    },
    {
      title:'Total Application',
      para:'',
      value:'15',
      icon:'',
      background:'Warning'
    }
  ]
  return (
    <section className="border-top ">
      <div className="container mt-3">
        <Row xs={1} md={4} className="g-4">
          {cardData.map((item) => (
            <Col>
              <Card
                bg={item.background.toLowerCase()}
                key={item}
                text={item.title.toLowerCase() === "light" ? "dark" : "white"}
                className="mb-2"
              >
                {/* <Card.Header>Header</Card.Header> */}
                <Card.Body>
                  <Card.Title style={{fontSize:'16px'}}>{item.title} </Card.Title>
                  <Card.Text style={{color:'#fff',fontSize:'16px'}}>{item.value}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
