import React from "react";
import {
  Grid,
  GridColumn,
  Header,
  HeaderSubheader,
  Icon,
} from "semantic-ui-react";
import "../../assets/styles.css";
import { valuePropData } from "../../pages/home/data";

const renderValueProp = () => {
  return valuePropData.map((info, index) => {
    return (
      <>
        <GridColumn index={index}>
          <Header as="h1" icon textAlign="center">
            <Icon name={info.icon} color={info.color} />
            <Header.Content>{info.title}</Header.Content>
          </Header>
          <HeaderSubheader as="h5" content={info.subtitle} />
        </GridColumn>
      </>
    );
  });
};

const ValueProp = () => {
  return (
    <Grid stackable container columns={3}>
      {renderValueProp(valuePropData)}
    </Grid>
  );
};

export default ValueProp;
