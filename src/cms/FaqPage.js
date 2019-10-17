import React from "react";
import PropTypes from "prop-types";
import { FaqPageTemplate } from "../templates/faq-page";

const FaqPage = ({ entry, widgetFor }) => (
  <FaqPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

FaqPage.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default FaqPage;
