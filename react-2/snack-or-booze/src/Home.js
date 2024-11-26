import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Snack or Booze Cafe!
            </h3>
          </CardTitle>
          <CardText>
            We offer a variety of delicious snacks and refreshing drinks. Check out our menu!
          </CardText>
          <CardText>
            <b>Snacks:</b> {snacks.length} available
          </CardText>
          <CardText>
            <b>Drinks:</b> {drinks.length} available
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
