import React, { useState } from "react";
import {
  render,
  DatePicker,
  useApplyMetafieldsChange,
} from "@shopify/checkout-ui-extensions-react";

render("Checkout::Dynamic::Render", () => <App />);

function App() {
  // Set the metafield namespace and key you want to store data to on the order
  const METAFIELD_NAMESPACE = "shipping";
  const METAFIELD_KEY = "requested_shipping_date";

  // Set the initial selected date
  const [selectedDate, setSelectedDate] = useState("2021-06-01");

  // Get the `updateMetafield` function from the `useApplyMetafieldsChange` hook
  const updateMetafield = useApplyMetafieldsChange();

  // Handle when a buyer selects a new date
  const handleDateChange = (newSelectedDate) => {
    setSelectedDate(newSelectedDate);
    updateMetafield({
      type: "updateMetafield",
      namespace: METAFIELD_NAMESPACE,
      key: METAFIELD_KEY,
      valueType: "string",
      value: newSelectedDate,
    });
  };

  // Render the `DatePicker` component
  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
    />
  );
}