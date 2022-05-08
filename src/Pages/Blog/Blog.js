import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data/blog.json")
      .then((data) => data.json())
      .then((data) => setBlogs(data));
  }, []);

  console.log(blogs);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            {blogs.map((blog) => (
              <Card className="p-4 my-2" key={blog.id}>
                <Card.Title className="text-center bg-secondary text-light py-2">{blog.questionName}</Card.Title>
                <Card.Body>
                  <Card.Subtitle>{blog.Answer?.def}</Card.Subtitle>

                  {blog.Answer?.difference1.length > 0 &&
                  blog.Answer?.difference1.length > 0 ? (
                    <Row className="my-3">
                      <Col>
                        <ul className="list-group list-group-flush">
                          {blog.Answer?.difference1.map((authori, index) => (
                            <li className="list-group-item" key={index}>
                              {authori}
                            </li>
                          ))}
                        </ul>
                      </Col>
                      <Col>
                        <ul className="list-group list-group-flush">
                          {blog.Answer?.difference2.map((authori, index) => (
                            <li className="list-group-item" key={index}>
                              {authori}
                            </li>
                          ))}
                        </ul>
                      </Col>
                    </Row>
                  ) : (
                    ""
                  )}
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
