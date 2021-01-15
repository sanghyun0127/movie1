import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Title from "./Title";
import PropTypes from "prop-types";

const HorizontalSlider = ({ title, children }) => (
  //Fragment 때문에 <> 대신 View 넣어주는데 현재 버전에서는 딱히 안넣어줘도 되는듯
  <>
    <Title title={title} />
    <ScrollView
      style={{ marginTop: 20, marginBottom: 40 }}
      contentContainerStyle={{ paddingLeft: 30 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </>
);

HorizontalSlider.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
