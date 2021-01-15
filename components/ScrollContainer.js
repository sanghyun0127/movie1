import React from "react";
import PropTypes from "prop-types";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator, RefreshControl } from "react-native";
import { useState } from "react/cjs/react.development";

const ScrollContainer = ({
  refreshFn,
  loading,
  children,
  contentContainerStyle,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          enabled={false}
          tintColor={"white"}
        />
      }
      style={{
        backgroundColor: "black",
      }}
      contentContainerStyle={{
        flex: loading ? 1 : "auto",
        justifyContent: loading ? "center" : "flex-start",
        ...contentContainerStyle,
      }}
    >
      {loading ? <ActivityIndicator color="white" size="small" /> : children}
    </ScrollView>
  );
};
ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  contentContainerStyle: PropTypes.object,
  refreshFn: PropTypes.func,
};

export default ScrollContainer;
