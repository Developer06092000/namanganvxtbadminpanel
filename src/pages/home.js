import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Form>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Manzili</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Telefon raqami</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Elektron manzili</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Telegram manzili</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Instagram manzili</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Facebook manzili</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Twitter manzili</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>YouTube manzili</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Bosh sahifa uchun fikr muallif rasmi</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Bosh sahifa uchun fikr matni</Form.Label>
                    <Form.Control as="textarea" />
                  </Form.Group>
                </Col>
                <Col lg={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bosh sahifa uchun fikr muallif F.I.Sh.
                    </Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Bosh sahifa 1-videosi</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Bosh sahifa 1-videosi matni</Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Bosh sahifa 2-videosi</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Bosh sahifa 2-videosi matni</Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Bosh sahifa YouTube 1-videosi manzili</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Bosh sahifa YouTube 2-videosi manzili</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Bosh sahifa YouTube 3-videosi manzili</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Bosh sahifa YouTube 4-videosi manzili</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Bosh sahifa YouTube 5-videosi manzili</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Bosh sahifa YouTube 6-videosi manzili</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Yangiliklar sahifasi uchun video</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Rahbariyat sahifasi uchun rasm</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Tumanlar sahifasi uchun rasm</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
