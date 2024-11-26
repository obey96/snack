import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function ItemDetails({ items, cantFind, type }) {
  const { id } = useParams();

  // Find the item based on the type (snack or drink)
  let item = items.find(item => item.id === id);
  if (!item) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          {/* Display the recipe and serve properties dynamically based on item type */}
          {type === "snacks" && (
            <>
              <p>
                <b>Recipe:</b> {item.recipe}
              </p>
              <p>
                <b>Serve:</b> {item.serve}
              </p>
            </>
          )}
          {type === "drinks" && (
            <>
              <p>
                <b>Ingredients:</b> {item.ingredients}
              </p>
              <p>
                <b>Alcoholic:</b> {item.alcoholic ? "Yes" : "No"}
              </p>
            </>
          )}
        </CardBody>
      </Card>
    </section>
  );
}

export default ItemDetails;
