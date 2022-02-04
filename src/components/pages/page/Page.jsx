import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";
import { useParams } from "react-router-dom";
import { getPage } from "../../../.api/api.js";

const Page = ({ match }) => {
  const { pageName } = useParams();
  const [page, setPage] = useState(null);
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const { data } = await getPage(pageName);
        setPage(data);
      } catch (e) {
        setPage(false);
      }
    };
    fetchPage();
  }, []);

  return (
    <Container>
      <Row className="pt-4">
        {page ? (
          <div
            dangerouslySetInnerHTML={{
              __html: page,
            }}
          />
        ) : (
          "Не удалось загрузить страницу"
        )}
      </Row>
    </Container>
  );
};

export default connect(connector, dispatcher)(Page);
